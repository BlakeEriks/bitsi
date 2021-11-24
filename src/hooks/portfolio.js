import { useEffect, useState } from "react"

const API_BASE_URL = process.env.REACT_APP_API_URL

const usePortfolio = (username) => {

    const [balance, setBalance] = useState([])
    const [assets, setAssets] = useState({})
    const [history, setHistory] = useState([])

    const {isSuccess, data} = useQuery(`portfolio/history/${username}`, async () => {
        return await http.get(`${API_BASE_URL}/tokens/prices`)
    })

    useEffect( () => {
        if (isSuccess) {
            setBalance(data[data.length - 1].balance)
            setAssets(data[data.length - 1].assets)
            setHistory(data)
        }
    }, [data])

    return {balance, assets, history}

}

export default usePortfolio
