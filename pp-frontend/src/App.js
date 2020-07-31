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
import HomePage from "./pages/HomePage";
import PassportPage from "./pages/PassportPage";
import PrivateRoute from "./pages/PrivateRoute";
import AddTripPage from "./pages/AddTripPage";
import TripProvider from "./context/trip/TripContextProvider";
import BottomAppBar from "./components/PassportAppBar/BottomAppBar";
import passportTheme from "./components/theme/passportTheme";
import {MuiThemeProvider} from "@material-ui/core";
import SearchPage from "./pages/SearchPage";
import VisaInfoContextProvider from "./context/visaInfo/VisaInfoContextProvider";

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
            <PrivateRoute path="/home" exact>
                <HomePage />
                <BottomAppBar />
            </PrivateRoute>
            <PrivateRoute path="/passport" exact>
                <PassportPage />
                <BottomAppBar />
            </PrivateRoute>
        <PrivateRoute path="/search" exact>
            <SearchPage />
            <BottomAppBar />
        </PrivateRoute>
            <PrivateRoute path="/addtrip" exact>
                <AddTripPage />
                <BottomAppBar />
            </PrivateRoute>
        </Switch>
    </BrowserRouter>;
}

function App() {
    return (
        <MuiThemeProvider theme={passportTheme}>
        <UserContextProvider>
            <TripProvider>
                <VisaInfoContextProvider>
            <Navigation/>
                </VisaInfoContextProvider>
            </TripProvider>
        </UserContextProvider>
    </MuiThemeProvider>
    );
}

export default App;
