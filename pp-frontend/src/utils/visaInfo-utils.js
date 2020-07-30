import {getJWTToken} from "./jwt-utils";

export async function fetchVisaInfo(destination) {
    const token = getJWTToken();
    const response = await fetch(`/api/visainfo/${destination}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error('something went wrong!');
    }
    return await response.json();
}