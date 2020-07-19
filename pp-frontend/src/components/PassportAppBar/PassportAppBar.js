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
    },
}));

function PassportAppBar() {
    const classes = useStyles();
    const { authStatus, userData } = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);
    return (
        <ThemeProvider theme={passportTheme}>
        <AppBar color={"primary"} position="static">
            <Toolbar>
                <Typography color={"secondary"} variant="h6" className={classes.title}>
                    Passport App {userData && userData.displayName}
                </Typography>
                {userData && <Avatar alt="Remy Sharp" src={userData.avatarUrl} />}
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
        </ThemeProvider>
    );
}

export default PassportAppBar;