import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MuiButton from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import { UserDispatchContext, UserStateContext,} from '../context/user/UserContext';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS,} from '../context/user/UserContextProvider';
import { performLogin } from '../utils/auth-utils';
import { Redirect } from 'react-router-dom';
import { getDecodedJWTToken, setJWTToken } from '../utils/jwt-utils';
import { Grid, makeStyles } from '@material-ui/core';
import {GithubLoginButton} from "../components/oauth/GithHubLoginButton";
import {FacebookLoginButton} from "../components/oauth/FacebookLoginButton";
import passportTheme from "../components/theme/passportTheme";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import { styled } from '@material-ui/core/styles';
import {maxHeight} from "@material-ui/system";
import Container from "@material-ui/core/Container";
import logo from '../images/planet-earth.png';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingTop: theme.spacing(1),
        backgroundColor: '#651E38',
        height: '100%',
        marginTop: "10vh",
    },
    // myContainer: {
    //     backgroundColor: '#651E38',
    //     height: '100%',
    // },
    root:{
        display: 'flex',
        height: '100%',
    },
    mona:{
        height: '100%',
        width : '100%',
        position: 'absolute',
        backgroundColor: '#651E38',
        margin : '0',


    }
    // magicButton: {
    //     backgroundColor: '#651E38',
    //     boxShadow:  '9px 9px 18px #280c16, -9px -9px 18px #a2305a',
    //     color: '#c6b5b5',
    //     borderRadius: '56px',
    //     background: 'linear-gradient(145deg, #6c203c, #5b1b32)',
    //     alignContent: "center",
    //     margin: theme.spacing(2),
    // },
    // pushedMagicButton: {backgroundColor: '#651E38',
    //     boxShadow:  '9px 9px 18px #280c16, -9px -9px 18px #a2305a',
    //     color: '#c6b5b5',
    //     borderRadius: '56px',
    //     background: 'linear-gradient(145deg, #5b1b32, #6c203c)',
    //     alignContent: "center",
    //     margin: theme.spacing(2),
    // }

}));

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useContext(UserDispatchContext);

    const classes = useStyles();

    function login() {
        dispatch({ type: LOGIN });
        performLogin(username, password)
            .then((data) => {
                setJWTToken(data);
                const userData = getDecodedJWTToken();
                dispatch({ type: LOGIN_SUCCESS, payload: userData });
            })
            .catch(() => {
                dispatch({ type: LOGIN_FAILED });
            });
    }

    const { authStatus } = useContext(UserStateContext);
    if (authStatus === 'SUCCESS') {
        return <Redirect to={'/home'} />;
    }

    // let [buttonStyle, setButtonStyle] = useState()
    //
    // const unpushButtonStyle = () => {
    //     setButtonStyle(classes.magicButton)
    // }
    // let pushButtonStyle = () => {
    //     setButtonStyle(classes.pushedMagicButton)
    // }

    return (

        <div className={classes.mona}>

        <Grid
            className={classes.gridContainer}
            container
            alignContent="center"
            justify="space-evenly"
            direction={"column"}

        >
            <img src={logo} alt={"logo"} width={'200px'} height={'200px'} />
        {/*    <Container*/}
        {/*        className={classes.myContainer}*/}
        {/*    >*/}
            {/*<Grid item>*/}
                <div>
                    <TextField
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                <Button  onClick={login}>Login</Button>
                </div>

                {/*<Button  className={classes.magicButton}>...</Button>*/}
                {/*{!buttonStyle ? <Button onClick={unpushButtonStyle}>...</Button> :*/}
                {/*    <Button onClick={pushButtonStyle()}>...</Button>}*/}

                <div>
                    <GithubLoginButton />
                </div>
                <div>
                    <FacebookLoginButton />
                </div>
            {/*</Grid>*/}
            {/*</Container>*/}
        </Grid>
        </div>
    );
}

export default LoginPage;