import { useQuery } from "react-query";
import useHttp from "./http";
 
const API_BASE_URL = process.env.REACT_APP_API_URL

const useTokens = () => {
    const http = useHttp()
    const{data, isSuccess} = useQuery('tokens', async () => {
        return await http.get(`${API_BASE_URL}/tokens`)
    })

    return {tokens: data, isSuccess}
}

const useToken = symbol => {
    const http = useHttp()
    const {isSuccess, data} = useQuery(`tokens/${symbol}`, async () => {
        return await http.get(`${API_BASE_URL}/tokens/${symbol}`)
    }, {enabled: !!symbol})

    return {token: data, isSuccess}
}

const useTokenHistory = (symbol, period) => {
    const http = useHttp()
    return useQuery(`tokens/history/${symbol}/${period}`, async () => {
        return await http.get(`${API_BASE_URL}/tokens/history/${symbol}/${period}`)
    }, 
    {enabled: !!symbol && !!period, keepPreviousData: true})
}

export { useToken, useTokens, useTokenHistory };
