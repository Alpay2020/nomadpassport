import BottomAppBar from "../components/PassportAppBar/BottomAppBar";
import TripCard from "../components/TripCard/TripCard";
import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddTripCard from '../components/TripCard/AddTripCard';
import {TripDispatchContext, TripStateContext,} from '../context/trip/TripContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { fetchTrips } from '../context/trip/TripActions';
import { Grid } from '@material-ui/core';

export default function PassportPage() {

        const { trips, fetchStatus } = useContext(TripStateContext);
        const dispatch = useContext(TripDispatchContext);

        useEffect(() => {
            if (!fetchStatus) {
                fetchTrips(dispatch);
            }
        }, [fetchStatus, dispatch]);

    return (
        <>
            {fetchStatus === 'PENDING' && <CircularProgress />}
            {fetchStatus === 'FAILED' && (
                <Typography variant="body1" color="error" component="p">
                    Fetch Trips failed
                </Typography>
            )}
            <Grid container justify={'center'}>
                {trips.map((trip) => (
                    <TripCard
                        key={trip.id}
                        trip={trip}
                        onDeleteSuccess={() => console.log('delete')}
                    />
                ))}
            </Grid>
        </>
    );
}
