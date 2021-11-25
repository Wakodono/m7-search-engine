import React from 'react'
import { connect } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import { removeJobsAction } from '../actions'

export const Favourites = ({ jobs, removeListings }) => {
    return (
        <Row>
            <Col sm={12}>
            <ul style={{ listStyle: "none" }}>
        {cart.map((listing, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => removeListings(i)}>
              <FaTrash />
            </Button>
            {listing.title}
          </li>
        ))}
      </ul>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.jobs.listings
})

const mapDispatchToProps = dispatch => ({
  removeListing: (indexToRemove) => {
      dispatch(removeFromJobsAction(index.ToRemove))
  }  
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
