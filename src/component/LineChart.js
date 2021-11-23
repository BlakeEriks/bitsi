import { ResponsiveLine } from "@nivo/line"
import moment from "moment"
import useChartData from "../hooks/chartData"
import { ToolTipContainer, ToolTipMainText, ToolTipSubText } from "../styles/Chart"
import { colors } from "../styles/Colors"

const LineChart = ({selectedToken, selectedPeriod}) => {

    const {isSuccess, chartConfig, chartData} = useChartData(selectedToken, selectedPeriod)

    const theme = {
        axis: {
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

    const dollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const Tooltip = value => {
        return (
            <ToolTipContainer>
                <ToolTipMainText>
                    {dollarFormatter.format(value.slice.points[0].data.y)}
                </ToolTipMainText>
                <ToolTipSubText>
                    {moment(value.slice.points[0].data.x).format('MMM D hh:mm')}
                </ToolTipSubText>
            </ToolTipContainer>
        )
    }

    return (
        isSuccess &&
        <ResponsiveLine
            data={chartData}
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
                ...chartConfig?.axisBottom
            }}
            pointSymbol={() => <g><circle r={0}/></g>}
            theme={theme}
        />
    )
}

export default LineChart