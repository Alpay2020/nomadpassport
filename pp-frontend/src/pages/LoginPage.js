import React from 'react';
import { makeStyles } from '@material-ui/core';
import {GithubLoginButton} from "../components/oauth/GithHubLoginButton";
import {FacebookLoginButton} from "../components/oauth/FacebookLoginButton";
import Box from "@material-ui/core/Box";
import logo from '../images/planet-earth.png';

const useStyles = makeStyles({

    root:{
        height: '100%',
        width : '100%',
        backgroundColor: '#651E38',
        margin : '0',
        direction : "column",


    },
    login:{

        flexDirection : "column",
        justifyContent : "center",
        display : "flex",
        alignItems: "center",
        padding : "20px",

    },
    logo:{
        display : "flex",
        justifyContent : "center",
        paddingBottom : "100px",
        paddingTop : "50px",

    }


});

function LoginPage() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
        <Box className={classes.logo}>
            <img src={logo} alt={"logo"} width={'200px'} height={'200px'} />
            </Box>
            <Box className={classes.login}>
                <div>
                    <GithubLoginButton />
                </div>
                </Box>
                 <Box className={classes.login}>
                <div>
                    <FacebookLoginButton />
                </div>
            </Box>
         </div>
        </>
    );
}

export default LoginPage;