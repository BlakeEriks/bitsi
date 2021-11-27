import { useEffect, useState } from "react"
import { useErrorHandler } from "react-error-boundary"
import { useMutation, useQuery, useQueryClient } from "react-query"
import useHttp from "./http"

const API_BASE_URL = process.env.REACT_APP_API_URL

const usePortfolio = (username) => {
    
    const handleError = useErrorHandler()

    const http = useHttp()
    const [balance, setBalance] = useState([])
    const [assets, setAssets] = useState([])
    const [history, setHistory] = useState([])
    const queryClient = useQueryClient()

    const {isSuccess, data} = useQuery(`portfolio/history/${username}`, async () => {
        return await http.get(`${API_BASE_URL}/portfolio/history/${username}`)
    }, {enabled: !!username})

    useEffect( () => {
        if (isSuccess) {
            setBalance(data[data.length - 1].balance)
            setAssets(data[data.length - 1].assets)
            setHistory(data)
        }
    }, [data])

    const tradeMutation = useMutation( portfolio => {
        return http.post(`${API_BASE_URL}/portfolio/${username}`, portfolio)
    }, {
        onSuccess: () => queryClient.invalidateQueries(`portfolio/history/${username}`)
    })

    const sell = ({symbol, quantity, price}) => {
        const orderTotal = quantity * price
        let newAssets = [...assets]
        const existingAsset = newAssets.find( asset => asset.symbol === symbol)
        if (!balance || !existingAsset || existingAsset.quantity < quantity) {
            return {success: false, error: 'Insufficient Token Quantity'}
        }
        const newBalance = balance + orderTotal
        existingAsset.quantity = existingAsset.quantity - quantity

        /* If token amount is 0, remove from assets */
        if (existingAsset.quantity === 0) {
            newAssets = newAssets.filter(asset => asset.symbol != symbol)
        }
        tradeMutation.mutate({assets: newAssets, balance: newBalance})
        return {success: true}
    }

    const buy = ({symbol, quantity, price}) => {
        const orderTotal = quantity * price
        if (!balance || balance < orderTotal) {
            return {success: false, error: 'Insufficient Balance'}
        }
        const newBalance = balance - orderTotal
        const newAssets = [...assets]
        const existingAsset = newAssets.find( asset => asset.symbol === symbol)
        if (existingAsset) {
            existingAsset.quantity = existingAsset.quantity + quantity
        }
        else {
            newAssets.push({symbol, quantity})
        }
        tradeMutation.mutate({assets: newAssets, balance: newBalance})
        return {success: true}
    }

    const makeTrade = order => {
        if (order.method === 'BUY') return buy(order)
        if (order.method === 'SELL') return sell(order)
    }

    return {balance, assets, history, isSuccess, makeTrade}

}

export default usePortfolio
