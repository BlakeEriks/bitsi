import moment from "moment"
import { useEffect, useState } from "react"
import { useTokenHistory } from "./token"

const convertDataToChartDataFormat = (data, symbol) => {
    return [{id : symbol, data : data.values.map(value => ({x: new Date(value.timestamp), y: Number(value.price)}))}]
}

const chartConfigOptions = {
    'year' : { axisBottom: { tickValues: 'every 2 months', format: tick => moment(tick).format('MMM yyyy') } },
    'sixMonths' : { axisBottom: { tickValues: 'every month', format: tick => moment(tick).format('MMM yyyy') } },
    'threeMonths' : { axisBottom: { tickValues: 'every 2 weeks', format: tick => moment(tick).format('MMM D') } },
    'month' : { axisBottom: { tickValues: 'every 6 days', format: tick => moment(tick).format('MMM D') } },
    'week' : { axisBottom: { tickValues: 'every day', format: tick => moment(tick).format('MMM D') } },
    'day' : { axisBottom: { tickValues: 'every 4 hours', format: tick => moment(tick).format('h:mma') } }
}

const useChartData = (symbol, period) => {
    const {isSuccess, data} = useTokenHistory(symbol, period)
    const [chart, setChart] = useState({data: null, config: null})

    useEffect( () => {
        if (isSuccess) {
            setChart({data: convertDataToChartDataFormat(data, symbol), config: chartConfigOptions[period]})
        }
    }, [data])

    return {isSuccess, chartData: chart.data, chartConfig: chart.config}
}

export default useChartData