
export async function fetchCovid19Api(destinationCountry) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const currentDate = yyyy + '-' + mm + '-' + dd;
    const dayBefore = dd -1;
    // const twoDaysBefore = dd -2;
    const dayBeforeCurrentDate = yyyy + '-' + mm + '-' + dayBefore;
    // const twoDaysBeforeCurrentDate = yyyy + '-' + mm + '-' + twoDaysBefore;

    const response = await fetch(`https://api.covid19api.com/total/country/`+ destinationCountry + `?from=` + dayBeforeCurrentDate + `&to=` + currentDate, {
        method: 'GET',
    });
    if (response.status !== 200) {
        throw new Error('something went wrong!');
    }
    return await response.json();
}