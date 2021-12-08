import moment from "moment"
import { useEffect, useState } from "react"
import { useChartState } from "./chartState"
import { usePortfolioHistory } from "./portfolio"
import { useTokenHistory } from "./token"

const convertDataToChartDataFormat = (data) => {
    return [{id : 'chartDataId', data : data.data.map(entry => ({x: new Date(entry.timestamp), y: Number(entry.value)}))}]
}

const chartConfigOptions = {
    'year' : { axisBottom: { tickValues: 'every 2 months', format: tick => moment(tick).format('MMM yyyy') } },
    'sixMonths' : { axisBottom: { tickValues: 'every month', format: tick => moment(tick).format('MMM yyyy') } },
    'threeMonths' : { axisBottom: { tickValues: 'every 2 weeks', format: tick => moment(tick).format('MMM D') } },
    'month' : { axisBottom: { tickValues: 'every 6 days', format: tick => moment(tick).format('MMM D') } },
    'week' : { axisBottom: { tickValues: 'every day', format: tick => moment(tick).format('MMM D') } },
    'day' : { axisBottom: { tickValues: 'every 4 hours', format: tick => moment(tick).format('h:mma') } }
}

const useChartData = (period) => {

    const [chartState] = useChartState()
    const {mode, token, username} = chartState
    const tokenHistory = useTokenHistory(token, period)
    const portfolioHistory = usePortfolioHistory(username, period)
    const [chart, setChart] = useState({data: null, config: null})
    const {isSuccess, isFetching, data} = mode === 'token' ? tokenHistory : portfolioHistory

    useEffect( () => {
        if (isSuccess) {
            setChart({data: convertDataToChartDataFormat(data), config: chartConfigOptions[period]})
        }
        else {
            setChart({data: null, config: null})
        }
    }, [data])

    return {isFetching, chartData: chart.data, chartConfig: chart.config}
}

export default useChartData