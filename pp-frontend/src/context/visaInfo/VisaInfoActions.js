import { fetchVisaInfoById } from '../../utils/visaInfo-utils';

export const FETCH_VISAINFO = 'FETCH_VISAINFO';
export const FETCH_VISAINFO_SUCCESS = 'FETCH_VISAINFO_SUCCESS';
export const FETCH_VISAINFO_FAILED = 'FETCH_VISAINFO_FAILED';

export async function fetchVisaInfo(dispatch, id) {
    dispatch({ type: FETCH_VISAINFO });
    try {
        const visaInfo = await fetchVisaInfoById(id);
        dispatch({ type: FETCH_VISAINFO_SUCCESS, payload: visaInfo });
    } catch (error) {
        dispatch({ type: FETCH_VISAINFO_FAILED, payload: error });
    }
}
