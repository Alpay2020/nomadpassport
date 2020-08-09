import AddTripCard from "../components/TripCard/AddTripCard";
import {Box} from "@material-ui/core";
import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

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
});


export default function AddTripPage() {

    const classes = useStyles();

    return(
        <div className={classes.root}>
        <Box className={classes.box}>
            <Card className={classes.card}>
                <Typography className={classes.title} variant="h4">Add a trip</Typography>
                <Typography>You can add a trip to your digital passport to keep track of your trips and to avoid overstaying your visa.</Typography>
            <AddTripCard/>
            </Card>
        </Box>
        </div>
)
}