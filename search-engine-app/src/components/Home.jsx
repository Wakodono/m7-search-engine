import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


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
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type="search" placeholder="Search" value={query} onChange={handleChange} />
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Home