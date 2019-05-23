import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTrips } from '../../actions';
import AddTrip from '../Trip/AddTrip/AddTrip';

import Trip from '../Trip/Trip';

class TripsList extends React.Component {
  state = {
    update: false
  };

  reloade = () => {
    this.setState({
      update: !this.state.update
    });
  };

  componentDidMount() {
    this.props.getTrips();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('hellow');
  //   return this.state.update !== nextState.update;
  // }

  render() {
    return (
      <div>
        {this.props.trips &&
          this.props.trips.map(trip => <Trip key={trip.trip_id} trip={trip} />)}
        <AddTripWtihRouter reloade={this.reloade} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};

export default connect(
  mapStateToProps,
  { getTrips }
)(TripsList);

const AddTripWtihRouter = withRouter(AddTrip);
