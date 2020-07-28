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
        backgroundColor: 'lightgray',
        '&:hover': {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
        },
    },
});

function TripCard({ trip }) {
    const dispatch = useContext(TripDispatchContext);
    function handleDelete(event) {
        event.stopPropagation();
        removeTrip(dispatch, trip.id);
    }
    const classes = useStyles();
    const history = useHistory();
    return
}

export default TripCard;