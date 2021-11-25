import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Job from "./Job";
import uniqid from "uniqid";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);

  const params = useParams();

  useEffect(() => {
    getJobs();
  }, []);

  const baseURL = "https://strive-jobs-api.herokuapp.com/jobs?company=";

  const getJobs = async () => {
    const response = await fetch(baseURL + params.companyName);
    const { data } = await response.json();

    setJobs(data);
  };

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={uniqid()} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;