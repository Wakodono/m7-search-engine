import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getJobsAction } from '../store/actions'
import uniqid from 'uniqid' 
import JobResult from './JobResult'


 const mapDispatchToProps = (dispatch) => ({
     getJobs: (baseURL, query) => {
         dispatch(getJobsAction(baseURL, query))
     }
 })

 const Home = () => {
    
  const [query, setQuery] = useState("")
  const [jobs, setJobs] = useState([])


  // https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10 Perform a search using this example

    const baseURL = 'https://strive-jobs-api.herokuapp.com/jobs?search='

    const handleSubmit = async (e) => {
        e.preventDefault()

        getJobsAction(baseURL, query)
    
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    
    return (
        <Container>
            <Row>
                <Col xs={10} className='mx-auto my-3'>
                    <h1>Ninja WebDev Jobs Search</h1>
                    <Link to="/favourites" className="btn btn-primary">Favourites</Link>
                </Col>
                <Col xs={10} className='mx-auto'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control 
                        type="search" 
                        value={query}
                        onChange={handleChange} 
                        placeholder="Attack your keys and press Enter..." />
                    </Form>
                </Col>
                <Col xs={10} className='mx-auto mb-5'>
                    {
                        jobs.elements && jobs.elements.map(jobData => <JobResult key={uniqid()} data={jobData} />)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default connect((s) => s, mapDispatchToProps)(Home);