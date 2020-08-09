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
        padding: '20px 0 60px 0',
    },
    card: {
        margin: 20,
        padding: "20px 8px 20px 8px",
        backgroundColor: '#e2e6e9',
        boxShadow:  '9px 9px 11px #bcbfc1, -9px -9px 11px #ffffff',
        borderRadius: '10px',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
    },
    title: {
        flexGrow: 1,
        fontFamily: "DomaineDisplay, Georgia, serif;",
        color: "#651E38",
        fontWeight: "400",
        paddingBottom: "5px"
    },
    box:{
        padding: "5px 2px 5px 2px",
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
        <Box className={classes.box}>
            <Card className={classes.card}>
            <Typography className={classes.title} variant="h4">Search</Typography>
            <Typography>Find all relevant visa information about your destination. Select your citizenship and browse through all countries' entry requirements!</Typography>
            <SearchVisaInfoForm />
            </Card>
        </Box>
    <div>

        <Box className={classes.box}>
            {/*{fetchStatus === 'PENDING' && <CircularProgress />}*/}
            {/*{fetchStatus === 'FAILED' && (*/}
            {/*    <Typography variant="body1" color="error" component="p">*/}
            {/*        Fetch VisaInfo failed*/}
            {/*    </Typography>*/}
            {/*)}*/}
            {fetchStatus === 'SUCCESS' && <Card className={classes.card}>
            {visaInfo.citizenship &&
            <Typography>
                Citizen from <span style={{fontWeight:"bold"}}>{visaInfo.citizenship}</span>
            </Typography>}
            {visaInfo.destination &&
            <Typography>
            Traveling to <span style={{fontWeight:"bold"}}>{visaInfo.destination}</span>
            </Typography>}
            {visaInfo.visaType &&
            <Typography>
            Traveling as <span style={{fontWeight:"bold"}}>{visaInfo.visaType}</span>
            </Typography>}
            {visaInfo.visaFreeDay &&
            <Typography>
            Days you can visit without a visa <span style={{fontWeight:"bold"}}>{visaInfo.visaFreeDay}</span>
            </Typography>}
            {visaInfo.visaFee &&
            <Typography>
            Fee for visa <span style={{fontWeight:"bold"}}>{visaInfo.visaFee}</span>
            </Typography>}
            {visaInfo.paidForDay &&
            <Typography>
            Days you can stay with a visa <span style={{fontWeight:"bold"}}>{visaInfo.paidForDay}</span>
            </Typography>}
            </Card>}
        </Box>
        </div>
            </div>

    )
}