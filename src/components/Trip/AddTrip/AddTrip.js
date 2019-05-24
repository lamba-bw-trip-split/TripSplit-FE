import React from "react";
import { connect } from "react-redux";
import { addTrip } from "../../../actions";
// import Datepicker from '../../Calendar/Datepicker/Datepicker';
// import Calender from 'react-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddTrip extends React.Component {
	state = {
		trip: {
			description: "",
			trip_start: "",
			trip_end: ""
		},
		startDate: new Date(),
		endDate: new Date()
	};

	handleChange = e => {
		this.setState({
			trip: {
				...this.state.trip,
				[e.target.name]: e.target.value
			}
		});
	};

	handleChangeDate = date => {
		const newDate = date.toISOString().slice(0, 10);
		const numDate = parseInt(newDate.replace("-", "").replace("-", ""), 10);
		console.log(newDate);
		this.setState({
			trip: {
				...this.state.trip,
				trip_start: numDate
			},
			startDate: date
		});
	};

	handleChangeDateend = date => {
		const newDate = date.toISOString().slice(0, 10);
		const numDate = parseInt(newDate.replace("-", "").replace("-", ""), 10);
		console.log(newDate);
		this.setState({
			trip: {
				...this.state.trip,
				trip_end: numDate
			},
			endDate: date
		});
	};

	addTrip = e => {
		console.log(this.state.trip);

		e.preventDefault();
		this.props.addTrip(this.state.trip);
		this.setState({
			trip: {
				description: "",
				trip_start: "",
				trip_end: ""
			}
		});
		// this.props.reloade();
	};

	render() {
		console.log(this.state.startDate.toLocaleDateString());
		return (
			<div>
				{/* <h3>{this.state.startDate}</h3> */}
				<form>
					<label htmlFor='description'>Description: </label>
					<input
						type='text'
						name='description'
						placeholder='Description'
						value={this.state.trip.description}
						onChange={this.handleChange}
					/>
					<DatePicker
						selected={this.state.startDate}
						onChange={this.handleChangeDate}
					/>
					<DatePicker
						selected={this.state.endDate}
						onChange={this.handleChangeDateend}
					/>
					{/* <label htmlFor="trip_start">Start Date: </label>
          <input
            type="text"
            name="trip_start"
            placeholder="YYYY-MMM-DD"
            value={this.state.trip.trip_start}
            onChange={this.handleChange}
          />
          <label htmlFor="trip_end">End Date: </label>
          <input
            type="text"
            name="trip_end"
            placeholder="YYYY-MM-DD"
            value={this.state.trip.trip_end}
            onChange={this.handleChange}
          /> */}

					{/* <Datepicker
            label="Start"
            name="trip_start"
            value={this.state.trip.trip_start}
            onChange={this.handleChangecal}
          /> */}
					{/* <Datepicker
            label="End"
            name="trip_end"
            value={this.state.trip.trip_end}
            onChange={this.handleChange}
          /> */}
					<button onClick={this.addTrip}>Add</button>
				</form>
			</div>
		);
	}
}

export default connect(
	null,
	{ addTrip }
)(AddTrip);
