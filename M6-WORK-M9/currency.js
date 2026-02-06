


// Currency Data ...................................
export const getCurrencyConversionData = async () => {
    const headers = new Headers();
    headers.append("x-api-key", "01d3fcc68b-2b076fac3d-t9x85w");
    const options = {
        method: "GET",
        redirect: 'follow',
        headers

    };


    const response = await fetch("https://api.fastforex.io/fetch-all?base=USD", options);
    if (!response.ok) {
        throw new Error("Cannot Fetch Currency Data");
    }
    return await response.json();
}

export const getSalary = (amountUSD,currency, currencyData)=>{
    const amount = (currency === "USD") ? amountUSD: amountUSD*currencyData.results[currency];
    const formatter = Intl.NumberFormat('en-US',{
        style:'currency',
        currency:currency

    });
    return formatter.format(amount);
}