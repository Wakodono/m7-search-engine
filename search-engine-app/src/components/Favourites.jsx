import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../store/actions";

// const mapDispatchToProps = (dispatch) => ({
//   removeFromFav: (f) => {
//     dispatch(removeFromFav(f));
//   },
// });

const Favourites = () => {

  const state = useSelector(s => s)
  const dispatch = useDispatch()

    return (
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {
              
                state.favourites.elements.map((f) => (
                <ListGroupItem>
                  <StarFill onClick={() => dispatch(removeFromFav(f))} />
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


export default Favourites;
