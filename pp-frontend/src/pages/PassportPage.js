import BottomAppBar from "../components/PassportAppBar/BottomAppBar";
import TripCard from "../components/TripCard/TripCard";
import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddTripCard from '../components/AddTripCard';
import {TripDispatchContext, TripStateContext,} from '../context/trip/TripContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { fetchTrips } from '../context/trip/TripActions';
import { Grid } from '@material-ui/core';

export default function PassportPage() {

        const [showAddTripDialog, setShowAddTripDialog] = useState(false);

        const { trips, fetchStatus } = useContext(TripStateContext);
        const dispatch = useContext(TripDispatchContext);

        useEffect(() => {
            if (!fetchStatus) {
                fetchTrips(dispatch);
            }
        }, [fetchStatus, dispatch]);

        return(
        <div>
            <TripCard />

            <BottomAppBar />
        </div>
    )
}