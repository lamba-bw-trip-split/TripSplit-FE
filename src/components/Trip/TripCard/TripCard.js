import React from "react";
import { axiosWithAuth } from "../../../axiosWithAuth";
import Activity from "../Activity/Activity";
import AddAcitivity from "../Activity/AddActivity";
import { getMembers, getExp } from "../../../actions";
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
		// axiosWithAuth()
		// 	.get(`/api/trips/${id}/expenses`)
		// 	.then(res => {
		// 		console.log("from res:", res);
		// 		if (this.props.expenses.length > 0) {
		// 			this.setState(() => ({ expenses: this.props.expenses }));
		// 		} else {
		// 			this.setState(() => ({ expenses: res.data }));
		// 		}
		// 	})
		// 	.catch(error => {
		// 		console.error(error);
		// 	});
		this.props.getExp(id);
	};

	render() {
		console.log("from expenses:", this.state.expenses);

		return (
			<div>
				<h3>{this.state.trip && this.state.trip.description}</h3>
				{this.props.expenses &&
					this.props.expenses.map(exp => (
						<Activity activity={exp} key={exp.expense_id} id={exp.expense_id} />
					))}
				{this.props.expUpdate
					? this.props.getExp(this.props.match.params.id)
					: null}
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
		members: state.members,
		expenses: state.newExp,
		expUpdate: state.expUpdate
	};
};

export default connect(
	mapStateToProps,
	{ getMembers, getExp }
)(TripCard);
