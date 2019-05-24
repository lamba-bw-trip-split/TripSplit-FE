import React from 'react';
import { connect } from 'react-redux';
import { delTrip } from '../../actions';
import { Link } from 'react-router-dom';
import { white } from 'ansi-colors';

//import { Button } from 'reactstrap';

class Trip extends React.Component {
  state = {};

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    // console.log(this.props.trip.trip_id);
    return (
      <>
        <div className="trip">
          <Link to={`/trips/${this.props.trip.trip_id}`}>
            <h2>Trip: {this.props.trip.description}</h2>
          </Link>

          {/* <p>Start: {this.props.trip.trip_start}</p>
          <p>End: {this.props.trip.trip_end}</p>
          <p>{this.props.trip.trip_id}</p> */}
          <span
            style={red}
            onClick={() => this.props.delTrip(this.props.trip.trip_id)}
          >
            DELETE TRIP
          </span>
        </div>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     trips: state.trips
//   };
// };

export default connect(
  null,
  {
    delTrip
  }
)(Trip);

const red = {
  color: 'red',
  border: '1px solid red',
  cursor: 'pointer',
  background: 'white',
  padding: '5px'
};
