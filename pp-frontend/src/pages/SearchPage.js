import React, {useContext, useEffect} from "react";
import {Box} from "@material-ui/core";
import SearchVisaInfoForm from "../components/SearchVisaInfo/SearchVisaInfoForm";
import {VisaInfoDispatchContext, VisaInfoStateContext} from "../context/visaInfo/VisaInfoContext";
import Typography from "@material-ui/core/Typography";
import {fetchTrips} from "../context/trip/TripActions";
import {fetchVisaInfo} from "../context/visaInfo/VisaInfoActions";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SearchPage() {

    const { visaInfo, fetchStatus} = useContext(VisaInfoStateContext);
    const dispatch = useContext(VisaInfoDispatchContext);

    useEffect(() => {
        if (!fetchStatus) {
            fetchVisaInfo(dispatch);
        }
    }, [fetchStatus, dispatch]);

    return(
        <>
            {fetchStatus === 'PENDING' && <CircularProgress />}
            {fetchStatus === 'FAILED' && (
                <Typography variant="body1" color="error" component="p">
                    Fetch VisaInfo failed
                </Typography>
            )}
        <Box>
            <SearchVisaInfoForm />
        </Box>
        <Box>
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
        </Box>
        </>

    )
}