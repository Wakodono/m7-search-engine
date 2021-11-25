import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import JobResult from './JobResult'


 const Home = () => {
    
  const [query, setQuery] = useState("")
  const [jobs, setJobs] = useState([])

  // https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10 Perform a search using this example

    let baseURL = 'https://strive-jobs-api.herokuapp.com/jobs?search='

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

        const res = await fetch(baseURL + query + '&limit=10')

        if (!res.ok) {
            alert(`Uh oh we couldn't get the resutls!!`)
            return
        }

        const { data } = await res.json()

        setJobs({ jobs: data })
        } catch (error) {
            console.log(error)
        }
    
    }

    const handleChange = (e) => {
        setQuery({ query: e.target.value })
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
                        <Form.Control type="search" value={state.query} onChange={handleChange} placeholder="Attack your keys and press Enter..." />
                    </Form>
                </Col>
                <Col xs={10} className='mx-auto mb-5'>
                    {
                        this.state.jobs.map(jobData => <JobResult key={uniqid()} data={jobData} />)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Home