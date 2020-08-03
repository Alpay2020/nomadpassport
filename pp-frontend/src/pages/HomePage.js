import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {UserDispatchContext, UserStateContext} from "../context/user/UserContext";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
        root: {
            backgroundColor: '#e2e6e9',
            height: '100%',
            paddingTop: '20px',
        },
    card:{
        margin: 10,
        paddingTop: "20px",
        backgroundColor: '#e2e6e9',
        boxShadow:  '9px 9px 18px #c0c4c6, -9px -9px 18px #ffffff',
        borderRadius: '10px',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
    },
    }
)

export default function HomePage() {
    const classes = useStyles();
    const { userData } = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);


    return(
    <div className={classes.root}>
        <Box>
        <Card className={classes.card}>
        <Typography variant="h6">Welcome, {userData.displayName}!</Typography>
        <Typography>Nomad Passport gives you the ability to get your destination's entry requirements with one click and helps you keeping track of your trips.</Typography>
        </Card>
        </Box>
        <Box>
            <Card className={classes.card}>
                <Typography variant="h6">Your next trip:</Typography>
                <Typography>next upcoming trip...</Typography>
            </Card>
        </Box>
        <Box>
            <Card className={classes.card}>
                <Typography variant="h6">Top destination of the day:</Typography>
                <Typography>random destination...</Typography>
            </Card>
        </Box>
    </div>

    )
}