import AddTripCard from "../components/TripCard/AddTripCard";
import {Box} from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllTrips } from '../utils/trip-utils';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#e2e6e9',
        height: '100%',
        paddingTop: '20px',
    },
});


export default function AddTripPage() {

    const classes = useStyles();
    const { id } = useParams();

    const [trip, setTrip] = useState();
    useEffect(() => {
        fetchAllTrips(id)
            .then((data) => setTrip(data))
            .catch((e) => console.error(e));
    }, [id]);

    return(
        <>
        <Box className={classes.root}>
            <AddTripCard/>
        </Box>
        </>
)
}