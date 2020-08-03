import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LuggageIcon from '../images/luggage.svg';
import PassportIcon from '../images/passport.svg';
import LoupeIcon from '../images/loupe.svg';
import AddIcon from '../images/add.svg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: "fixed",
        top: 'auto',
        bottom: "0",
        boxShadow: "none",
        justifyContent: 'center',
        backgroundColor: '#651E38',
        color: '#c6b5b5',

    },
    icon: {
        width: '35px',
        height: '35px',
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const pathname = window.location.pathname;
    const [value, setValue] = useState(pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation   value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction  component={Link} to="/home" label="Home" value="home" icon={<img alt={"luggageIcon"} className={classes.icon} src={LuggageIcon}/>} />
            <BottomNavigationAction component={Link} to="/passport" label="Passport" value="passport" icon={<img alt={"passportIcon"} className={classes.icon} src={PassportIcon}/>} />
            <BottomNavigationAction  component={Link} to="/search" label="Search" value="search" icon={<img alt={"loupeIcon"} className={classes.icon} src={LoupeIcon}/>} />
            <BottomNavigationAction component={Link} to="/addtrip" label="Add trip" value="add trip" icon={<img alt={"addIcon"} className={classes.icon} src={AddIcon}/>} />
        </BottomNavigation>
    );
}
