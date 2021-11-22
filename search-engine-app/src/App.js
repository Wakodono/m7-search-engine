import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <Link to = "/">
              <h1>
                The Search Engine
              </h1>
            </Link>
          <Form.Control type="text" placeholder="Search" />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
