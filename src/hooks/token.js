import { useQuery } from "react-query";
import useHttp from "./http";
 
const API_BASE_URL = process.env.REACT_APP_API_URL

const useTokenPrices = () => {
    const http = useHttp()
    return useQuery('tokens/prices', async () => {
        return await http.get(`${API_BASE_URL}/tokens/prices`)
    })
}

const useTokenPrice = symbol => {
    const http = useHttp()
    return useQuery(`tokens/prices/${symbol}`, async () => {
        return await http.get(`${API_BASE_URL}/tokens/prices/${symbol}`)
    }, {enabled: !!symbol})
}

const useTokenHistory = (symbol, period) => {
    const http = useHttp()
    return useQuery(`tokens/history/${symbol}/${period}`, async () => {
        return await http.get(`${API_BASE_URL}/tokens/history/${symbol}/${period}`)
    }, 
    {enabled: !!symbol && !!period, keepPreviousData: true})
}

export { useTokenPrice, useTokenPrices, useTokenHistory };
