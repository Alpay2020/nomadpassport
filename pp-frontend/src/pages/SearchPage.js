import React, {useContext, useEffect} from "react";
import {Box} from "@material-ui/core";
import SearchVisaInfoForm from "../components/SearchVisaInfo/SearchVisaInfoForm";
import {VisaInfoDispatchContext, VisaInfoStateContext} from "../context/visaInfo/VisaInfoContext";
import Typography from "@material-ui/core/Typography";
import {fetchVisaInfo} from "../context/visaInfo/VisaInfoActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#e2e6e9',
        height: '100%',
        paddingTop: '20px',
    },
    card: {

        margin: 10,
        backgroundColor: '#e2e6e9',
        '&:hover': {
            backgroundColor: '#c0c4c6',
        },
        boxShadow:  '9px 9px 18px #c0c4c6, -9px -9px 18px #ffffff',
        // color: '#c6b5b5',
        borderRadius: '10px',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
    },
    resultBox: {
        paddingTop: "40px",
    },
});

export default function SearchPage() {

    const classes = useStyles();
    const { visaInfo, fetchStatus} = useContext(VisaInfoStateContext);
    const dispatch = useContext(VisaInfoDispatchContext);

    useEffect(() => {
        if (!fetchStatus) {
            fetchVisaInfo(dispatch);
        }
    }, [fetchStatus, dispatch]);

    return(
        <div className={classes.root}>
            {fetchStatus === 'PENDING' && <CircularProgress />}
            {fetchStatus === 'FAILED' && (
                <Typography variant="body1" color="error" component="p">
                    Fetch VisaInfo failed
                </Typography>
            )}
        <Box>
            <SearchVisaInfoForm />
        </Box>
        <Box className={classes.resultBox}>
            <Card className={classes.card}>
            {visaInfo.citizenship &&
            <Typography>
            Citizen from {visaInfo.citizenship}
            </Typography>}
            {visaInfo.destination &&
            <Typography>
            Traveling to {visaInfo.destination}
            </Typography>}
            {visaInfo.visaType &&
            <Typography>
            Traveling as {visaInfo.visaType}
            </Typography>}
            {visaInfo.visaFreeDay &&
            <Typography>
            Days you can visit without a visa {visaInfo.visaFreeDay}
            </Typography>}
            {visaInfo.visaFee &&
            <Typography>
            Fee for visa {visaInfo.visaFee}
            </Typography>}
            {visaInfo.paidForDay &&
            <Typography>
            Days you can stay with a visa {visaInfo.paidForDay}
            </Typography>}
            </Card>
        </Box>
        </div>

    )
}