import React, {useContext, useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {fetchVisaInfo} from "../../context/visaInfo/VisaInfoActions";
import {VisaInfoDispatchContext} from "../../context/visaInfo/VisaInfoContext";
import {countryList} from "./countryList";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
    formControl: {
        margin: 1,
        minWidth: 120,
    },
    searchButton:{
        backgroundColor: '#e2e6e9',
        boxShadow:  '9px 9px 11px #bcbfc1, -9px -9px 11px #ffffff',
        color: '#242323',
        borderRadius: '56px',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
    }
});

export default function SearchVisaInfoForm() {

    const dispatch = useContext(VisaInfoDispatchContext);
    const classes = useStyles();
    const [citizenship, setCitizenship] = useState('');
    const [id, setId] = useState('');

    function handleCitizenshipChange(event) {
        setCitizenship(event.target.value);
    }
    function handleIdChange(event) {
        setId(event.target.value);
    }
    function handleSubmit() {
        fetchVisaInfo(dispatch, id);
    }
    return (
        <>
        <CardContent>
        <form>
            <FormControl className={classes.formControl}>
                <InputLabel id="citizenship">Citizenship</InputLabel>
                <Select
                    labelId="citizenship"
                    id="citizenship"
                    value={citizenship}
                    onChange={handleCitizenshipChange}
                >
                    {countryList.map((country)=><MenuItem key={country.id} value={country.label}>{country.label}</MenuItem>) }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="destination">Destination</InputLabel>
                <Select
                    labelId="destination"
                    id="destination"
                    value={id}
                    onChange={handleIdChange}
                >
                    {countryList.map((country)=><MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>) }
                </Select>
            </FormControl>
        </form>
        </CardContent>
            <CardActions>
            <Button
                disabled={id.length < 1}
                onClick={handleSubmit}
                color="primary"
                className={classes.searchButton}
            >
                Search
            </Button>
    </CardActions>
    </>

    )
}

