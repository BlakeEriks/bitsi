import { useState } from "react"
import { useTokenPrice } from "../hooks/token"
import { ZeroHeightDiv } from "../styles/Boxes"
import { ChartBackground, ChartContainer, ChartCurrentValue, ChartHeader, ChartPeriodButton, ChartPeriodSelector, ChartTitle } from "../styles/Chart"
import LineChart from "./LineChart"

const Chart = () => {

    const chartPeriods = [  {display:'1Y', name: 'year'}, 
                            {display:'6M', name: 'sixMonths'},
                            {display:'3M', name: 'threeMonths'},
                            {display:'1M', name: 'month'},
                            {display:'1W', name: 'week'},
                            {display:'1D', name: 'day'}, ]
                            
    const selectedToken = 'BTC'
    const tokenPrice = useTokenPrice(selectedToken)
    const [selectedPeriod, setSelectedPeriod] = useState('year')

    const dollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const getCurrentValue = () => {
        if (tokenPrice.data) {
            return dollarFormatter.format(tokenPrice.data.price)
        }
    }

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
                    {getCurrentValue()}
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