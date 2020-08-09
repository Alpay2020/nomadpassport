import TripCard from "../components/TripCard/TripCard";
import React, { useContext, useEffect } from 'react';
import {TripDispatchContext, TripStateContext,} from '../context/trip/TripContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {fetchFutureTrips, fetchPastTrips} from '../context/trip/TripActions';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#e2e6e9',
        height: '100%',
        padding: '20px 0 60px 0',
    },
    card:{
        margin: 10,
        paddingTop: "20px",
        backgroundColor: '#e2e6e9',
        boxShadow:  '9px 9px 18px #c0c4c6, -9px -9px 18px #ffffff',
        borderRadius: '10px',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
    },
});

export default function PassportPage() {

    const { pastTrips, futureTrips, fetchStatus } = useContext(TripStateContext);
    const dispatch = useContext(TripDispatchContext);
    const classes = useStyles();

    useEffect(() => {
        if (!fetchStatus) {
            fetchFutureTrips(dispatch);
        }
    }, [fetchStatus, dispatch]);

    useEffect(() => {
        if (!fetchStatus) {
            fetchPastTrips(dispatch);
        }
    }, [fetchStatus, dispatch]);

    return (
        <div className={classes.root}>
            <Box>
                <Card className={classes.card}>
                    {fetchStatus === 'PENDING' && <CircularProgress />}
                    {fetchStatus === 'FAILED' && (
                        <Typography variant="body1" color="error" component="p">
                            Fetch Trips failed
                        </Typography>
                    )}
                <Typography variant="h6">Your next trips:</Typography>
                <div>{futureTrips.map((trip) => (
                    <TripCard
                        key={trip.id}
                        trip={trip}
                        onDeleteSuccess={() => console.log('delete')}
                    />
                ))}</div>
                </Card>
            </Box>
            <Box>
                <Card className={classes.card}>
                    {fetchStatus === 'PENDING' && <CircularProgress />}
                    {fetchStatus === 'FAILED' && (
                        <Typography variant="body1" color="error" component="p">
                            Fetch Trips failed
                        </Typography>
                    )}
                <Typography variant="h6">Your past trips:</Typography>
                <div>{pastTrips.map((trip) => (
                    <TripCard
                        key={trip.id}
                        trip={trip}
                        onDeleteSuccess={() => console.log('delete')}
                    />
                ))}</div>
                </Card>
            </Box>
            </div>
    );
}
