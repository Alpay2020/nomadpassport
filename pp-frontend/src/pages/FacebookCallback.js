import React, {useContext, useEffect} from "react";
import {useHistory, useLocation} from 'react-router-dom';
import {performLoginWithFacebook} from "../utils/auth-utils";
import {getDecodedJWTToken, setJWTToken} from "../utils/jwt-utils";
import {LOGIN_FAILED, LOGIN_SUCCESS} from "../context/user/UserContextProvider";
import {UserDispatchContext, UserStateContext} from "../context/user/UserContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from 'react-router-dom';

export default function FacebookCallbackPage() {
    const location = useLocation()
    const dispatch = useContext(UserDispatchContext);
    const history = useHistory();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get("code");
        performLoginWithFacebook(code).then((data) => {
            setJWTToken(data);
            const userData = getDecodedJWTToken();
            dispatch({type: LOGIN_SUCCESS, payload: userData});
            history.push("/home")
        }).catch(() => {
            dispatch({type: LOGIN_FAILED});
        });
    }, [location, dispatch, history]);

    return <div>
        Login with facebook
        <CircularProgress />

    </div>
}