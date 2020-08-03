import TripCard from "../components/TripCard/TripCard";
import React, { useContext, useEffect, useState } from 'react';
import {TripDispatchContext, TripStateContext,} from '../context/trip/TripContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { fetchTrips } from '../context/trip/TripActions';
import { Grid } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#e2e6e9',
        height: '100%',
        paddingTop: '20px',
    },
});

export default function PassportPage() {

    const { trips, fetchStatus } = useContext(TripStateContext);
    const dispatch = useContext(TripDispatchContext);
    const classes = useStyles();

        useEffect(() => {
            if (!fetchStatus) {
                fetchTrips(dispatch);
            }
        }, [fetchStatus, dispatch]);

    return (
        <div className={classes.root}>
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
        </div>
    );
}
