import { useEffect, useState } from "react"
import { useAuthState } from "../hooks/auth"
import { useChartState } from "../hooks/chartState"
import { usePortfolio } from "../hooks/portfolio"
import { useToken } from "../hooks/token"
import { HorizontalFlexBox, ZeroHeightDiv } from "../styles/Boxes"
import { ChartBackground, ChartContainer, ChartCurrentValue, ChartHeader, ChartPeriodButton, ChartPeriodSelector, ChartTitle } from "../styles/Chart"
import { InfoText } from "../styles/Text"
import { toDollarFormat } from "../util/dollarUtil"
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
    const {value} = usePortfolio(chartState.username)
    const [selectedPeriod, setSelectedPeriod] = useState('year')

    useEffect( () => {
        setChartState({mode: 'portfolio', username: auth?.username})
    }, [auth])
    
    const getDisplayValue = () => {
        return toDollarFormat(chartState.mode === 'portfolio' ? (isNaN(value) ? 0 : value) : token?.price)
    }

    const getChartTitle = () => {
        const userString = (!auth && chartState?.username) || (auth?.username !== chartState?.username) ? chartState?.username + '\'s' : 'My'
        return (chartState.mode === 'portfolio') ? 
                userString + ' Portfolio' : 
                <HorizontalFlexBox>
                    <div>
                        {token?.name}
                    </div>
                    <InfoText>
                        {token?.symbol}
                    </InfoText>
                </HorizontalFlexBox>
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