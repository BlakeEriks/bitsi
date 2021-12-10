import { useEffect } from "react"
import { useAuthState } from "../hooks/auth"
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
    const [chartState, setChartState] = useChartState()
    const [auth] = useAuthState()

    useEffect( () => {
        setViewState('chart')
    }, [chartState])

    useEffect( () => {
        setChartState({mode: 'portfolio', username: auth?.username})
    }, [auth])

    return ( 
        <DashboardContainer>
            <VerticalFlexBox alignItems='center'>
                <Balance />
                <BiggestMovers />
                <Trade />
            </VerticalFlexBox>
            <VerticalFlexBox alignItems='center'>
                <Card>
                    {viewState === 'chart' && <Chart />}
                    {viewState === 'coins' && <CoinIndex />}
                </Card>
                <Assets />
            </VerticalFlexBox>
            <Leaderboard />
        </DashboardContainer>
    )

}

export default Dashboard