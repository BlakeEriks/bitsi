import { useState } from "react"
import { useToken } from "../hooks/token"
import { ZeroHeightDiv } from "../styles/Boxes"
import { ChartBackground, ChartContainer, ChartCurrentValue, ChartHeader, ChartPeriodButton, ChartPeriodSelector, ChartTitle } from "../styles/Chart"
import toDollarFormat from "../util/dollarFormat"
import LineChart from "./LineChart"

const Chart = () => {

    const chartPeriods = [  {display:'1Y', name: 'year'}, 
                            {display:'6M', name: 'sixMonths'},
                            {display:'3M', name: 'threeMonths'},
                            {display:'1M', name: 'month'},
                            {display:'1W', name: 'week'},
                            {display:'1D', name: 'day'}, ]
                            
    const selectedToken = 'BTC'
    const {token} = useToken(selectedToken)
    const [selectedPeriod, setSelectedPeriod] = useState('year')

    return (
        <>
            <ChartTitle>
                Bitcoin
            </ChartTitle>
            <ZeroHeightDiv>
                <ChartBackground />
            </ZeroHeightDiv>
            <ChartHeader>
                <ChartCurrentValue>
                    {toDollarFormat(token?.price)}
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
                <LineChart selectedToken={selectedToken} selectedPeriod={selectedPeriod}/>
            </ChartContainer>
        </>
    )
}

export default Chart