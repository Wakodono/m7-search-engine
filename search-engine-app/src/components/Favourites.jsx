import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import { StarFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { removeFromFav } from "../store/actions";

const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (f) => {
    dispatch(removeFromFav(f));
  },
});

const Favourites = ({ props }) => {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {
              
                props.favourites.map((f) => (
                <ListGroupItem>
                  <StarFill onClick={() => props.removeFromFav(f)} />
                  <span>{f}</span>
                </ListGroupItem>
                ))
              
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }


export default connect((s) => s, mapDispatchToProps)(Favourites);
