import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_HcZ4emu0GN7Y5mRFrDbA9Fzx0DFVsbMYWzB2QruM&base_currency=${currency}`;
        fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function(res){
            return setData(res.rates)
        })
    },[currency])

    return data;
}

export default useCurrencyInfo;

