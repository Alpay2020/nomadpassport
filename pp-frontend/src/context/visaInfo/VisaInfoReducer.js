import {
    FETCH_VISAINFO,
    FETCH_VISAINFO_FAILED,
    FETCH_VISAINFO_SUCCESS,
} from './VisaInfoActions';

export default function VisaInfoReducer(state, action) {
    switch (action.type) {
        case FETCH_VISAINFO:
            return { ...state, fetchStatus: 'PENDING' };
        case FETCH_VISAINFO_SUCCESS:
            return { ...state, fetchStatus: 'SUCCESS', visaInfo: action.payload };
        case FETCH_VISAINFO_FAILED:
            return { ...state, fetchStatus: 'FAILED' };

        default:
            return state;
    }
}