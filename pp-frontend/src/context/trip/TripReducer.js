import {
    ADD_TRIP,
    ADD_TRIP_FAILED,
    ADD_TRIP_SUCCESS,
    DELETE_TRIP_SUCCESS,
    FETCH_TRIPS,
    FETCH_TRIPS_FAILED,
    FETCH_TRIPS_SUCCESS,
} from './TripActions';

export default function TripReducer(state, action) {
    switch (action.type) {
        case FETCH_TRIPS:
            return { ...state, fetchStatus: 'PENDING' };
        case FETCH_TRIPS_SUCCESS:
            return { ...state, fetchStatus: 'SUCCESS', trips: action.payload };
        case FETCH_TRIPS_FAILED:
            return { ...state, fetchStatus: 'FAILED' };
        case ADD_TRIP:
            return { ...state, addStatus: 'PENDING' };
        case ADD_TRIP_SUCCESS:
            return {
                ...state,
                addStatus: 'SUCCESS',
                trips: [...state.trips, action.payload],
            };
        case ADD_TRIP_FAILED:
            return { ...state, addStatus: 'FAILED' };
        case DELETE_TRIP_SUCCESS:
            return {
                ...state,
                trips: state.trips.filter((trip) => {
                    return trip.id !== action.payload;
                }),
            };
        default:
            return state;
    }
}