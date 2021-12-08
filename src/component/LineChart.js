import { ResponsiveLine } from "@nivo/line";
import moment from "moment";
import Loader from "react-loader-spinner";
import useChartData from "../hooks/chartData";
import { ToolTipContainer, ToolTipMainText, ToolTipSubText } from "../styles/Chart";
import { colors } from "../styles/Colors";
import { toDollarFormat } from "../util/dollarUtil";

const LineChart = ({period}) => {

    const {isFetching, chartConfig, chartData} = useChartData(period)

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
                stroke: colors.dark,
                strokeWidth: 1,
                strokeOpacity: 0.35,
            },
        }
    }

    const Tooltip = value => {
        return (
            <ToolTipContainer>
                <ToolTipMainText>
                    {toDollarFormat(value.slice.points[0].data.y)}
                </ToolTipMainText>
                <ToolTipSubText>
                    {moment(value.slice.points[0].data.x).format('MMM D hh:mm')}
                </ToolTipSubText>
            </ToolTipContainer>
        )
    }

    return (
        <>
            {isFetching && 
            <div style={{height: '0', width: '95%', margin: '0 auto'}}>
                <div style={{position: 'relative', height: '17.6em', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex:2}}>
                    <Loader 
                    type="ThreeDots"
                    color={colors.gray}
                    height={100}
                    width={100} 
                    />
                </div>
            </div>}
            {chartData &&
            <ResponsiveLine
                data={chartData}
                colors={isFetching ? 'rgba(238, 108, 138, 0.5)' : colors.accent}
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
            />}
        </>
    )
}

export default LineChart