import { useEffect, useState } from "react"
import { useAuthState } from "../hooks/auth"
import { useChartState } from "../hooks/chartState"
import { usePortfolio } from "../hooks/portfolio"
import { useToken, useTokens } from "../hooks/token"
import { ZeroHeightDiv } from "../styles/Boxes"
import { ChartBackground, ChartContainer, ChartCurrentValue, ChartHeader, ChartPeriodButton, ChartPeriodSelector, ChartTitle } from "../styles/Chart"
import toDollarFormat from "../util/dollarFormat"
import LineChart from "./LineChart"

const Chart = () => {

    const chartPeriods = [  
        {display:'1Y', name: 'year'}, 
        {display:'6M', name: 'sixMonths'},
        {display:'3M', name: 'threeMonths'},
        {display:'1M', name: 'month'},
        {display:'1W', name: 'week'},
        {display:'1D', name: 'day'}, 
    ]
                                       
    const [auth] = useAuthState()
    const [chartState, setChartState] = useChartState()
    const {token} = useToken(chartState.token)
    const {tokens} = useTokens()
    const {assets, balance} = usePortfolio(chartState.username)
    const [selectedPeriod, setSelectedPeriod] = useState('year')

    useEffect( () => {
        setChartState({mode: 'portfolio', username: auth.username})
    }, [])

    /* TODO move these to portfolio hook or chart state */
    const calculatePortfolioValue = () => {
        if (!assets) return 0
        let value = 0
        for (const asset of assets) { // {symbol}
            const token = tokens.find( token => token.symbol === asset.symbol)
            value += token.price * asset.quantity
        }
        return value + balance
    }

    const getDisplayValue = () => {
        const value = (chartState.mode === 'portfolio') ? calculatePortfolioValue() : token?.price
        return toDollarFormat(value)
    }

    const getChartTitle = () => {
        const userString = chartState.username === auth.username ? 'My' : chartState?.username + '\'s'
        return (chartState.mode === 'portfolio') ? userString + ' Portfolio' : token?.name
    }

    return (
        <>
            <ChartTitle>
                {getChartTitle()}
            </ChartTitle>
            <ZeroHeightDiv>
                <ChartBackground />
            </ZeroHeightDiv>
            <ChartHeader>
                <ChartCurrentValue>
                    {getDisplayValue()}
                </ChartCurrentValue>
                <ChartPeriodSelector>
                    {chartPeriods.map( (period, index) => 
                        <ChartPeriodButton 
                            key={index}
                            selected={period.name === selectedPeriod}
                            onClick={() => setSelectedPeriod(period.name)}>
                        {period.display}
                        </ChartPeriodButton>)
                    }
                </ChartPeriodSelector>
            </ChartHeader>
            <ChartContainer>
                <LineChart period={selectedPeriod}/>
            </ChartContainer>
        </>
    )
}

export default Chart