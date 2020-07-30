import BottomAppBar from "../components/PassportAppBar/BottomAppBar";
import AddTripCard from "../components/AddTripCard";
import {Box} from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllTrips } from '../utils/trip-utils';
import makeStyles from "@material-ui/core/styles/makeStyles";



export default function AddTripPage() {

    const { id } = useParams();

    const [trip, setTrip] = useState();
    useEffect(() => {
        fetchAllTrips(id)
            .then((data) => setTrip(data))
            .catch((e) => console.error(e));
    }, [id]);

    return(
        <div>
        <Box>
            <AddTripCard/>
        </Box>
        </div>
)
}