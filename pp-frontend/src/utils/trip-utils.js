import { getJWTToken } from './jwt-utils';

export async function fetchAllTrips() {
    const token = getJWTToken();
    const response = await fetch('/api/trips', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export function putTrip(dateTripStart, dateTripEnd, destinationCountry) {
    const token = getJWTToken();
    return fetch('/api/trips', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            dateTripStart: dateTripStart,
            dateTripEnd: dateTripEnd,
            destinationCountry: destinationCountry
        }),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }

        return response.json();
    });
}

export function deleteTrip(id) {
    const token = getJWTToken();
    return fetch(`/api/trips/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

