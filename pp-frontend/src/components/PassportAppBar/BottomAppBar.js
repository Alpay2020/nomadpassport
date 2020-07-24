import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LuggageIcon from '../images/luggage.svg';
import PassportIcon from '../images/passport.svg';
import LoupeIcon from '../images/loupe.svg';
import AddIcon from '../images/add.svg';
import {AiOutlineFileAdd, BsSearch, RiPassportLine, MdCardTravel} from "react-icons/all";
import { SvgIcon } from '@material-ui/core';
import {color} from "@material-ui/system";
import {Link} from 'react-router-dom';
import {UserStateContext} from "../../context/user/UserContext";
import {useLocation} from "react-router";




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
    text: {
        color: '#c6b5b5',
    },
    MuiBottomNavigationAction:{
                    color: '#D4AF37',



    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('passport');
    const location = useLocation();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation  value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction href={"/home"} label="Home" value="home" icon={<SvgIcon color={"#D4AF37"}><MdCardTravel/></SvgIcon>} />
            <BottomNavigationAction href={"/passport"}  label="Passport" value="passport" icon={<SvgIcon color={"#D4AF37"}><RiPassportLine/></SvgIcon>} />
            <BottomNavigationAction href={"/home"} label="Search" value="search" icon={<SvgIcon color={"#D4AF37"}><BsSearch/></SvgIcon>} />
            <BottomNavigationAction href={"/home"} label="Add trip" value="add trip" icon={<SvgIcon color={"#D4AF37"}><AiOutlineFileAdd/></SvgIcon>} />
        </BottomNavigation>
    );
}
