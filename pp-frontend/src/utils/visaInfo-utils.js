import {getJWTToken} from "./jwt-utils";

export async function fetchVisaInfoById(id) {
    const token = getJWTToken();
    const response = await fetch(`/api/visainfo/${id}`, {
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

export async function fetchRandomVisaInfo() {
    const token = getJWTToken();
    const response = await fetch(`/api/visainfo/random`, {
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