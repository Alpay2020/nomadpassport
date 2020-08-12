import React, {useContext, useState} from "react";
import {Box} from "@material-ui/core";
import SearchVisaInfoForm from "../components/SearchVisaInfo/SearchVisaInfoForm";
import {VisaInfoStateContext} from "../context/visaInfo/VisaInfoContext";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import {fetchCovid19Api} from "../utils/covid19Api-utils";
import VirusIcon from '../components/images/virus.svg';
import Button from "@material-ui/core/Button";

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
    icon: {
        width: '35px',
        height: '35px',
    },
    searchButton:{
        backgroundColor: '#e2e6e9',
        boxShadow:  '9px 9px 11px #bcbfc1, -9px -9px 11px #ffffff',
        color: '#242323',
        borderRadius: '100%',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
        marginTop: "5px"
    }
});

export default function SearchPage() {

    const classes = useStyles();
    const { visaInfo, fetchStatus} = useContext(VisaInfoStateContext);
    const [covid19Info, setCovid19Info] = useState();

    function handleChange() {
    (visaInfo.destination && fetchCovid19Api(visaInfo.destination).then((data) => {
        setCovid19Info(data)
    }))}
    console.log(covid19Info)

    return(
        <div className={classes.root}>
        <Box className={classes.box}>
            <Card className={classes.card}>
            <Typography className={classes.title} variant="h4">Search</Typography>
            <Typography>Find all relevant visa information about your destination. Select your citizenship and browse through all countries' entry requirements!</Typography>
            <SearchVisaInfoForm  />
            </Card>
        </Box>
    <div>

        <Box className={classes.box}>
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
                <Button className={classes.searchButton} onClick={handleChange}>
                    <img alt={"virusIcon"} className={classes.icon} src={VirusIcon}/>
                </Button>
            </Card>}
        </Box>
        </div>
            <Box className={classes.box}>
                {covid19Info &&
                <Card className={classes.card}>
                    {covid19Info &&
                    <Typography>
                        Active Covid-19 cases <span style={{fontWeight:"bold"}}>{covid19Info && covid19Info[0].Active}</span>
                    </Typography>}
                </Card>}
            </Box>
            </div>

    )
}