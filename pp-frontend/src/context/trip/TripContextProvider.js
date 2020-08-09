import { TripStateContext, TripDispatchContext } from './TripContext';
import React, { useReducer } from 'react';
import TripReducer from './TripReducer';

export default function TripProvider({ children }) {
    const [state, dispatch] = useReducer(TripReducer, {
        trips: [],
        futureTrips: [],
        pastTrips: [],
        fetchStatus: undefined,
    });

    return (
        <TripStateContext.Provider value={state}>
            <TripDispatchContext.Provider value={dispatch}>
                {children}
            </TripDispatchContext.Provider>
        </TripStateContext.Provider>
    );
}