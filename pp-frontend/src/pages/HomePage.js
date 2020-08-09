import React, {useContext, useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {UserStateContext} from "../context/user/UserContext";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import {fetchRandomVisaInfo} from "../utils/visaInfo-utils";
import {TripDispatchContext, TripStateContext} from "../context/trip/TripContext";
import {fetchFutureTrips, fetchPastTrips} from "../context/trip/TripActions";
import TripCard from "../components/TripCard/TripCard";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
        root: {
            backgroundColor: '#e2e6e9',
            height: '100%',
            padding: '20px 0 60px 0',
        },
        card:{
            margin: 20,
            padding: "20px 8px 20px 8px",
            backgroundColor: '#e2e6e9',
            boxShadow:  '9px 9px 11px #bcbfc1, -9px -9px 11px #ffffff',
            borderRadius: '10px',
            background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
        },
        title: {
            flexGrow: 1,
            fontFamily: "DomaineDisplay, Georgia, serif;",
            color: "#651E38",
            fontWeight: "400",
            paddingBottom: "5px"
        },
        box:{
            padding: "5px 2px 5px 2px",
        },
    }
)

export default function HomePage() {
    const classes = useStyles();
    const { userData } = useContext(UserStateContext);
    const { futureTrips, fetchStatus } = useContext(TripStateContext);
    const dispatch = useContext(TripDispatchContext);

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

    const [visaInfo, setVisaInfo] = useState({});

    useEffect(() => {
        fetchRandomVisaInfo()
            .then((data) => {
                setVisaInfo(data)
            })
    }, []);

    return(
    <div className={classes.root}>
        <Box className={classes.box}>
        <Card className={classes.card}>
        <Typography className={classes.title} variant="h4">Welcome, {userData && userData.displayName}!</Typography>
        <Typography>Nomad Passport gives you the ability to get your destination's entry requirements with one click and helps you keep track of your trips.</Typography>
        </Card>
        </Box>
        <Box className={classes.box}>
            <Card className={classes.card}>
                <Typography className={classes.title} variant="h4">Nomads' destination</Typography>
                <Typography>If you need some inspiration we recommend <span style={{fontWeight:"bold"}}> {visaInfo.destination} </span> today.</Typography>
            </Card>
        </Box>


        <Box className={classes.box}>

            <Card className={classes.card}>
                <div>
                    {fetchStatus === 'PENDING' && <CircularProgress />}
                    {fetchStatus === 'FAILED' && (
                        <Typography variant="body1" color="error" component="p">
                            Fetch Trips failed
                        </Typography>
                    )}
                <Typography className={classes.title} variant="h4">Upcoming trips:</Typography>
                <div>{futureTrips.map((trip) => (
                    <TripCard
                        key={trip.id}
                        trip={trip}
                        onDeleteSuccess={() => console.log('delete')}
                    />
                ))}</div>
                </div>
            </Card>

        </Box>

    </div>

    )
}