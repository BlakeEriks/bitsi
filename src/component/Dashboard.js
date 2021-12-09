import { useEffect } from "react"
import { useChartState } from "../hooks/chartState"
import { useViewState } from "../hooks/view"
import { Card, DashboardContainer, VerticalFlexBox } from "../styles/Boxes"
import Assets from "./Assets"
import Balance from "./Balance"
import BiggestMovers from "./BiggestMovers"
import Chart from "./Chart"
import CoinIndex from "./CoinIndex"
import Leaderboard from "./Leaderboard"
import Trade from "./Trade"

const Dashboard = () => {

    const [viewState, setViewState] = useViewState()
    const [chartState] = useChartState()

    useEffect( () => {
        setViewState('dashboard')
    }, [chartState])

    return ( 
        <DashboardContainer>
            <VerticalFlexBox alignItems='center'>
                <Balance />
                <BiggestMovers />
                <Trade />
            </VerticalFlexBox>
            <VerticalFlexBox alignItems='center'>
                <Card>
                    {viewState === 'dashboard' && <Chart />}
                    {viewState === 'coins' && <CoinIndex />}
                </Card>
                <Assets />
            </VerticalFlexBox>
            <Leaderboard />
        </DashboardContainer>
    )

}

export default Dashboard