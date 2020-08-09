import React, { useContext } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { TripDispatchContext } from '../../context/trip/TripContext';
import { removeTrip } from '../../context/trip/TripActions';


function TripCard({ trip }) {
    const dispatch = useContext(TripDispatchContext);
    function handleDelete(event) {
        event.stopPropagation();
        removeTrip(dispatch, trip.id);
    }

    return (
                <CardContent>
                    <Typography variant="body1" component="p">
                        • {trip.dateTripStart} - {trip.dateTripEnd} :
                    </Typography>
                    <Typography><span style={{fontWeight:"bold"}}>{trip.destinationCountry}</span><IconButton onClick={handleDelete}><DeleteIcon /></IconButton></Typography>
                </CardContent>
    );
}

export default TripCard;