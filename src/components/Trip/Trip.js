import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';

//import { Button } from 'reactstrap';

class Trip extends React.Component {
  state = {};

  componentDidMount() {
    console.log(this.props);
  }

  // showTotal = () => {
  //   let total = 0;
  //   this.state.activities.forEach(item => (total += item.price));
  //   return total;
  // };

  // calShares = () => {
  //   const total = this.showTotal();
  //   const eachShare = total / this.state.people.length;
  //   return eachShare;
  // };

  // calOwe = () => {
  //   const people = this.state.people.map(person => person);
  //   const activities = this.state.activities.map(item => item);
  //   const newPeople = people.map(person => {
  //     activities.forEach(item => {
  //       if (item.whoPaid === person.name) {
  //         person.paid += 50;
  //         // console.log(person.paid);
  //       }
  //     });
  //   });

  //   this.setState({
  //     people: newPeople
  //   });
  //   // console.log(this.state.people);
  //   // console.log(this.state);
  //   window.location.reload(true);
  // };

  render() {
    // console.log(this.props);
    return (
      <>
        <div>
          <h2>Trip: {this.props.trip.name}</h2>
          <p>Number of people: {this.props.trip.people.length}</p>
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
    addItem
  }
)(Trip);
