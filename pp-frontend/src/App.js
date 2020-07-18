import React, { useContext, useEffect } from 'react';
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContextProvider, {
    LOGIN_SUCCESS,
} from './context/user/UserContextProvider';
import { UserDispatchContext } from './context/user/UserContext';
import { getDecodedJWTToken, isJWTTokenValid } from './utils/jwt-utils';
import GitHubCallbackPage from "./pages/GitHubCallback";
import PassportAppBar from "./components/PassportAppBar/PassportAppBar";
import FacebookCallbackPage from "./pages/FacebookCallback";

function Navigation() {
    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if (isJWTTokenValid()) {
            dispatch({ type: LOGIN_SUCCESS, payload: getDecodedJWTToken() });
        }
    }, [dispatch]);
    return <BrowserRouter>
        <PassportAppBar />
        <Switch>
            <Route path="/login" exact>
                <LoginPage/>
            </Route>
            <Route path="/oauth/github" exact>
                <GitHubCallbackPage/>
            </Route>
            <Route path="/oauth/facebook" exact>
                <FacebookCallbackPage/>
            </Route>
        </Switch>
    </BrowserRouter>;
}

function App() {
    return <UserContextProvider>
            <Navigation/>
    </UserContextProvider>
}

export default App;
