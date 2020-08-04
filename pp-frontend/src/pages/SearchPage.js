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
        padding: "20px", //Balken muss weg, wenn kein Inhalt...
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
        // justifyContent: "space-between",
        // paddingTop: "40px",

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
        <Box py={3} className={classes.resultBox}>
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

    )
}