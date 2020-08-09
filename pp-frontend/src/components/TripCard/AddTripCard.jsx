import React, { useContext, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { addTrip } from '../../context/trip/TripActions';
import {TripDispatchContext, TripStateContext,} from '../../context/trip/TripContext';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "date-fns";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {countryList} from "../SearchVisaInfo/countryList";



const useStyles = makeStyles({

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        width: 200,
    },
    formControl: {
        margin: 1,
        minWidth: 120,
        height : "20vh",
    },
    selectEmpty: {
        marginTop: 2,
    },
    button: {
        backgroundColor: '#e2e6e9',
        boxShadow:  '9px 9px 11px #bcbfc1, -9px -9px 11px #ffffff',
        color: '#242323',
        borderRadius: '56px',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
    },
});



export default function AddTripCard() {
    const classes = useStyles();

    const [dateTripStart, setDateTripStart] = useState('');
    const [dateTripEnd, setDateTripEnd] = useState('');
    const [destinationCountry, setDestinationCountry] = useState('');

    const { addStatus } = useContext(TripStateContext);

    useEffect(() => {
        if (addStatus === 'SUCCESS') {
            setDateTripStart('') && setDateTripEnd('') && setDestinationCountry('');
        }
    }, [addStatus]);

    const dispatch = useContext(TripDispatchContext);

    function handleSubmit() {
        addTrip(dispatch, dateTripStart, dateTripEnd, destinationCountry);
    }
    function handleDateTripStartChange(event) {
        setDateTripStart(event.target.value);
    }
    function handleDateTripEndChange(event) {
        setDateTripEnd(event.target.value);
    }
    function handleDestinationCountryChange(event) {
        setDestinationCountry(event.target.value);
    }


    return (
        <>
            <CardContent>
                <form className={classes.formControl} onSubmit={handleSubmit}>
                            <TextField
                                id="Start date"
                                label="Start date"
                                type="date"
                                value={dateTripStart}
                                className={classes.textField}
                                onChange={handleDateTripStartChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="End date"
                                label="End date"
                                type="date"
                                value={dateTripEnd}
                                className={classes.textField}
                                onChange={handleDateTripEndChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="Destination">Destination</InputLabel>
                        <Select
                            labelId="Destination"
                            id="Destination"
                            value={destinationCountry}
                            onChange={handleDestinationCountryChange}
                        >
                            {countryList.map((country)=><MenuItem key={country.id} value={country.label}>{country.label}</MenuItem>) }
                        </Select>
                    </FormControl>
                </form>
                {addStatus === 'PENDING' && <CircularProgress />}
                {addStatus === 'FAILED' && (
                    <Typography variant="body1" component="p">
                        Add trip failed
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button
                    disabled={destinationCountry.length < 1}
                    onClick={handleSubmit}
                    className={classes.button}
                    >
                    Add
                </Button>
            </CardActions>
        </>
    );
}