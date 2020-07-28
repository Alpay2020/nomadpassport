import BottomAppBar from "../components/PassportAppBar/BottomAppBar";
import AddTripCard from "../components/AddTripCard";
import {Box} from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TripCard from '../components/TripCard/TripCard';
import { fetchAllTrips } from '../utils/trip-utils';

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
    <BottomAppBar/>
        </div>
)
}