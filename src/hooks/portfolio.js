import { useQuery } from "react-query"
import useHttp from "./http"

const API_BASE_URL = process.env.REACT_APP_API_URL

const usePortfolio = username => {
    const http = useHttp()
    const {isSuccess, data} = useQuery(`portfolio/${username}`, async () => {
        return await http.get(`${API_BASE_URL}/portfolio/${username}`)
    }, {enabled: !!username})
    return {balance: data?.balance, assets: data?.assets, isSuccess}
}

const usePortfolioHistory = (username, period) => {
    const http = useHttp()
    return useQuery(`portfolio/history/${username}/${period}`, async () => {
        return await http.get(`${API_BASE_URL}/portfolio/history/${username}/${period}`)
    }, {enabled: !!username && !!period, keepPreviousData: true})
}

export { usePortfolio, usePortfolioHistory }
