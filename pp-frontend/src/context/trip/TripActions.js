import { deleteTrip, fetchAllTrips, putTrip } from '../../utils/trip-utils';

export const FETCH_TRIPS = 'FETCH_TRIPS';
export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';
export const FETCH_TRIPS_FAILED = 'FETCH_TRIPS_FAILED';
export const ADD_TRIP = 'ADD_TRIP';
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const ADD_TRIP_FAILED = 'ADD_TRIP_FAILED';
export const DELETE_TRIP = 'DELETE_TRIP';
export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS';
export const DELETE_TRIP_FAILED = 'DELETE_TRIP_FAILED';

export async function fetchTrips(dispatch) {
    dispatch({ type: FETCH_TRIPS });
    try {
        const trips = await fetchAllTrips();
        dispatch({ type: FETCH_TRIPS_SUCCESS, payload: trips });
    } catch (error) {
        dispatch({ type: FETCH_TRIPS_FAILED, payload: error });
    }
}

export async function addTrip(dispatch, dateTripStart, dateTripEnd, destinationCountry) {
    dispatch({ type: ADD_TRIP });
    try {
        const trip = await putTrip(dateTripStart, dateTripEnd, destinationCountry);
        dispatch({ type: ADD_TRIP_SUCCESS, payload: trip });
    } catch (error) {
        dispatch({ type: ADD_TRIP_FAILED, payload: error });
    }
}

export async function removeTrip(dispatch, id) {
    dispatch({ type: DELETE_TRIP });
    try {
        await deleteTrip(id);
        dispatch({ type: DELETE_TRIP_SUCCESS, payload: id });
    } catch (error) {
        dispatch({ type: DELETE_TRIP_FAILED });
    }
}