import { ResponsiveLine } from "@nivo/line"
import moment from "moment"
import { useEffect, useState } from "react"
import { useTokenPrice } from "../hooks/token"
import { Card } from "../styles/Boxes"
import { ChartContainer, ChartCurrentValue, ChartHeader, ChartPeriodButton, ChartPeriodSelector, ChartTitle } from "../styles/Chart"
import { colors } from "../styles/Colors"

const periodNameConversion = {
    '1Y': 'year',
    '6M': 'sixMonths',
    '3M': 'threeMonths',
    '1M': 'month',
    '1W': 'week',
    '1D': 'day'
}

const Chart = () => {

    const selectedAsset = 'BTC'

    const tokenPrice = useTokenPrice(selectedAsset)
    const [selectedPeriod, setSelectedPeriod] = useState('1Y')
    const chartPeriods = ['1Y', '6M', '3M', '1M', '1W', '1D']
    const [dataSeries, setDataSeries] = useState(null)
    // const tokenHistory = useTokenHistory(selectedAsset, periodNameConversion[selectedPeriod])

    const chartConfigOptions = {
        '1Y' : {
            axisBottom: {
                tickValues: 'every 2 months',
                format: tick => moment(tick).format('MMM yyyy')
            }
        },
        '6M' : {
            axisBottom: {
                tickValues: 'every month',
                format: tick => moment(tick).format('MMM yyyy')
            }
        },
        '3M' : {
            axisBottom: {
                tickValues: 'every 2 weeks',
                format: tick => moment(tick).format('MMM D')
            }
        },
        '1M' : {
            axisBottom: {
                tickValues: 'every 6 days',
                format: tick => moment(tick).format('MMM D')
            }
        },
        '1W' : {
            axisBottom: {
                tickValues: 'every day',
                format: tick => moment(tick).format('MMM D')
            }
        },
        '1D' : {
            axisBottom: {
                tickValues: 'every 4 hours',
                format: tick => moment(tick).format('h:mma')
            }
        }
    }

    const dollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    useEffect( () => {
        fetch(`http://localhost:4000/tokens/history/${selectedAsset}/${periodNameConversion[selectedPeriod]}`)
        .then( async res => {
            let data = await res.json()
            const formattedData = { 
                data: [{id : selectedAsset, data : []}], 
                config: chartConfigOptions[selectedPeriod]
            }
            data.values.forEach( (value, index) => {
                formattedData.data[0].data.push({x: new Date(value.timestamp), y: Number(value.price)})
            })
            setDataSeries(formattedData)
        })
    }, [selectedPeriod])

    const Tooltip = value => {
        return (
            <div style={{background: colors.dark, color:'white', padding: '10px', borderRadius: '10px'}}>
                <div>
                    {dollarFormatter.format(value.slice.points[0].data.y)}
                </div>
                <div style={{fontSize: '12px', color: colors.gray}}>
                    {moment(value.slice.points[0].data.x).format('MMM D hh:mm')}
                </div>
            </div>
        )
    }

    const getCurrentValue = () => {
        if (tokenPrice.data) {
            return dollarFormatter.format(tokenPrice.data.price)
        }
        return ''
    }

    const theme = {
        axis: {
            textColor: '#000000',
            fontSize: '4em',
            tickColor: '#000000',
            ticks: {
                text: {
                  fill: colors.gray,
                  fontSize: '1em'
                }
            },
        },
        crosshair: {
            line: {
                stroke: colors.light,
                strokeWidth: 1,
                strokeOpacity: 0.35,
            },
        }
    }

    return (
        <Card width='50em'>
            <ChartTitle>
                Bitcoin
            </ChartTitle>
            <div style={{height: '0'}}>
                <div style={{margin: '0 auto', height: '21.2em',width: '95.5%', background: '#222222', borderRadius: '10px', position: 'relative', top: '0px', border: '1px solid '+ colors.gray, boxShadow: 'rgba(255, 255, 255, 0.1) 0px 10px 50px'}}>
                </div>
            </div>
            <ChartHeader>
                <ChartCurrentValue>
                    {getCurrentValue()}
                </ChartCurrentValue>
                <ChartPeriodSelector>
                    {chartPeriods.map( (period, index) => 
                        <ChartPeriodButton 
                            key={index}
                            selected={period === selectedPeriod}
                            onClick={() => setSelectedPeriod(period)}>
                        {period}
                        </ChartPeriodButton>)
                    }
                </ChartPeriodSelector>
            </ChartHeader>
            <ChartContainer>
                {dataSeries &&
                <ResponsiveLine
                    data={dataSeries.data}
                    margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
                    xScale={{ type: 'time'}}
                    enableGridX={false}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
                    enableGridY={false}
                    enableSlices={'x'}
                    sliceTooltip={Tooltip}
                    axisRight={null}
                    axisLeft={null}
                    layers={[ 'axes', 'areas', 'lines', 'points',  'mesh', 'crosshair', 'slices']}
                    animate={true}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 0,
                        tickPadding: 15,
                        ...dataSeries.config.axisBottom
                    }}
                    pointSymbol={() => <g><circle r={0}/></g>}
                    theme={theme}
                />}
            </ChartContainer>
        </Card>
    )
}

export default Chart