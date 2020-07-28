import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
    UserDispatchContext,
    UserStateContext,
} from '../../context/user/UserContext';
import { LOGOUT } from '../../context/user/UserContextProvider';
import { removeJWTToken } from '../../utils/jwt-utils';
import Avatar from "@material-ui/core/Avatar";
import passportTheme from "../theme/passportTheme";
import {ThemeProvider} from "@material-ui/styles";


const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        fontFamily: "DomaineDisplay, Georgia, serif;"
    },
    appBar: {
        width: '100%',


    }
}));

function PassportAppBar() {
    const classes = useStyles();
    const { authStatus, userData } = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);
    return (
        <AppBar className={classes.appBar} color={"secondary"} position="static">
            <Toolbar>
                <Typography color={"primary"} variant="h6" className={classes.title}>
                    NomadPassport • {userData && userData.displayName}
                </Typography>
                {authStatus === 'SUCCESS' && (
                    <Button
                        color="inherit"
                        onClick={() => {
                            dispatch({ type: LOGOUT });
                            removeJWTToken();
                        }}
                    >
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default PassportAppBar;