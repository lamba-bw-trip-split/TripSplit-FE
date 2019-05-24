import React from "react";
import { axiosWithAuth } from "../../../axiosWithAuth";
import Activity from "../Activity/Activity";
import AddAcitivity from "../Activity/AddActivity";
import { getMembers } from "../../../actions";
import { connect } from "react-redux";

class TripCard extends React.Component {
	state = {
		trip: null,
		expenses: null,
		id: null
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.fetchTrip(id);
		this.fetchExpenses(id);
		this.setState({
			id: id
		});
		this.props.getMembers(id);
	}

	fetchTrip = id => {
		axiosWithAuth()
			.get(`/api/trips/${id}`)
			.then(res => {
				// console.log(res);
				this.setState(() => ({ trip: res.data }));
			})
			.catch(error => {
				console.error(error);
			});
	};

	fetchExpenses = id => {
		axiosWithAuth()
			.get(`/api/trips/${id}/expenses`)
			.then(res => {
				console.log("from res:", res);
				this.setState(() => ({ expenses: res.data }));
			})
			.catch(error => {
				console.error(error);
			});
	};

	render() {
		console.log("from expenses:", this.state.expenses);

		return (
			<div>
				<h3>{this.state.trip && this.state.trip.description}</h3>
				{this.state.expenses &&
					this.state.expenses.map(exp => (
						<Activity activity={exp} key={exp.expense_id} id={this.state.id} />
					))}
				{this.props.members &&
					this.props.members.map((member, i) => (
						<span key={i}>
							{member.username}
							{" - "}
						</span>
					))}
				<AddAcitivity id={this.state.id} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		members: state.members
	};
};

export default connect(
	mapStateToProps,
	{ getMembers }
)(TripCard);
