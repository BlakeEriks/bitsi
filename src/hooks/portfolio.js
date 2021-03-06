import { useQuery } from "react-query"
import useHttp from "./http"
import { useTokens } from "./token"

const API_BASE_URL = process.env.REACT_APP_API_URL

const calculateAssetsValue = (assets, tokens) => {
    if (!assets || !tokens) return 0
    let value = 0
    for (const asset of assets) {
        const token = tokens.find( token => token.symbol === asset.symbol)
        if (token) {
            value += token.price * asset.quantity
        }
    }
    return value
}

const usePortfolio = username => {
    const http = useHttp()
    const {tokens} = useTokens()

    const {isSuccess, data} = useQuery(`portfolio/${username}`, async () => {
        return await http.get(`${API_BASE_URL}/portfolio/${username}`)
    }, {enabled: !!username})

    return {
        balance: username ? data?.balance : 0, 
        assets: username ? data?.assets : [], 
        value: username ? (data?.balance + calculateAssetsValue(data?.assets, tokens)).toFixed(2) : 0, 
        isSuccess
    }
}

const usePortfolioHistory = (username, period) => {
    const http = useHttp()
    const {isSuccess, isFetching, data} = useQuery(`portfolio/history/${username}/${period}`, async () => {
        return await http.get(`${API_BASE_URL}/portfolio/history/${username}/${period}`)
    }, {enabled: !!username, keepPreviousData: true})

    return {
        isSuccess: username ? isSuccess : false,
        isFetching,
        data: username ? data : undefined
    }
}

const usePortfolios = () => {
    const http = useHttp()
    const {tokens} = useTokens()

    const {data} = useQuery(`portfolio`, async () => {
        return await http.get(`${API_BASE_URL}/portfolio`)
    }, {keepPreviousData: true})

    const calcPortfolioValuesAndSort = () => {
        const withValues = data?.map(user => ({
            username: user.username, 
            value: Math.round(user.portfolio.balance + calculateAssetsValue(user.portfolio.assets, tokens))
        }))
        return withValues?.sort((a,b) => b.value - a.value).slice(0, 10)
    }

    return calcPortfolioValuesAndSort()
}

export { usePortfolio, usePortfolioHistory, usePortfolios }
