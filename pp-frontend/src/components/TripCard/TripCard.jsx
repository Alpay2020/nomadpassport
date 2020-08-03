import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import { TripDispatchContext } from '../../context/trip/TripContext';
import { removeTrip } from '../../context/trip/TripActions';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        margin: 10,
        backgroundColor: '#e2e6e9',
        '&:hover': {
            backgroundColor: '#c0c4c6',
        },
        boxShadow:  '9px 9px 18px #c0c4c6, -9px -9px 18px #ffffff',
        // color: '#c6b5b5',
        borderRadius: '10px',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
    },
});

function TripCard({ trip }) {
    const dispatch = useContext(TripDispatchContext);
    function handleDelete(event) {
        event.stopPropagation();
        removeTrip(dispatch, trip.id);
    }
    const classes = useStyles();

    return (
        <Grid item xs={10} sm={6} lg={3}>
            <Card
                className={classes.root}
            >
                <CardContent>
                    <Typography variant="body1" component="p">
                        {trip.dateTripStart} - {trip.dateTripEnd} : {trip.destinationCountry}
                    </Typography>
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default TripCard;