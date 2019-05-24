import {
	LOGIN_SUCCESS,
	LOGIN_START,
	LOGIN_FAILURE,
	SIGNUP_START,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	FETCH_TRIPS_START,
	FETCH_TRIPS_SUCCESS,
	FETCH_TRIPS_FAILURE,
	ADD_TRIP_START,
	ADD_TRIP_SUCCESS,
	ADD_TRIP_FAILURE,
	GET_MEMBER_START,
	GET_MEMBER_SUCCESS,
	INITIAL_TOKEN_START,
	INITIAL_TOKEN_SUCCESS,
	INITIAL_TOKEN_FAILURE,
	REFRESH_TRIPS,
	REFRESH_TRIPS_FINISHED
} from "../actions";

const initialState = {
	trips: [],
	pastTrips: [],
	loggingIn: false,
	token: localStorage.getItem("token"),
	error: "",
	errorStatusCode: null,
	signingUp: false,
	signupMsg: "",
	signedUp: false,
	fetchTrips: false,
	dataUpdate: false,
	members: [],
	isLoggedIn: null,
	isLoggedOut: null
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				loggingIn: true,
				error: ""
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loggingIn: false,
				isLoggedIn: true,
				isLoggedOut: false,
				error: "",
				signupMsg: ""
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loggingIn: false,
				isLoggedIn: false,
				isLoggedOut: true,
				error: action.payload
			};
		case SIGNUP_START:
			return {
				...state,
				signingUp: true,
				signupMsg: "",
				signedUp: false
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				signingUp: false,
				signupMsg: "Account successfully created!",
				signedUp: true
			};
		case SIGNUP_FAILURE:
			return {
				...state,
				error: "Registration failed!",
				signingUp: false,
				signedUp: false
			};
		case FETCH_TRIPS_START:
			return {
				...state,
				error: "",
				fetchTrips: true
			};
		case FETCH_TRIPS_SUCCESS:
			return {
				...state,
				fetchTrips: false,
				error: "",
				trips: action.payload
			};
		case FETCH_TRIPS_FAILURE:
			return {
				...state,
				fetchTrips: false,
				error: action.payload
			};

		case ADD_TRIP_START:
			return {
				...state,
				dataUpdate: true
			};
		case ADD_TRIP_SUCCESS:
			return {
				...state,
				dataUpdate: false
			};
		case ADD_TRIP_FAILURE:
			return {
				...state,
				dataUpdate: false
			};
		case GET_MEMBER_START:
			return {
				...state
			};
		case GET_MEMBER_SUCCESS:
			return {
				...state,
				members: action.payload
			};
		case INITIAL_TOKEN_START:
			return {
				...state,
				loggingIn: true
			};
		case INITIAL_TOKEN_SUCCESS:
			return {
				...state,
				loggingIn: false,
				isLoggedIn: true,
				isLoggedOut: false,
				token: action.payload
			};
		case INITIAL_TOKEN_FAILURE:
			return {
				...state,
				loggingIn: false,
				isLoggedIn: false,
				isLoggedOut: true
			};
		case REFRESH_TRIPS:
			return {
				...state,
				dataUpdate: true,
				trips: action.payload
			};
		case REFRESH_TRIPS_FINISHED:
			return {
				...state,
				dataUpdate: false
			};

		default:
			return state;
	}
};

// case ADD_ITEM:
//     return {
//       ...state,
//       trips: state.trips.map(trip => {
//         if (trip.id === action.id) {
//           trip.activities.push(action.payload);
//         }
//       })
