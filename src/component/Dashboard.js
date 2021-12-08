import { useViewState } from "../hooks/view"
import { Card, DashboardContainer, VerticalFlexBox } from "../styles/Boxes"
import Assets from "./Assets"
import Balance from "./Balance"
import BiggestMovers from "./BiggestMovers"
import Chart from "./Chart"
import CoinIndex from "./CoinIndex"
import Leaderboard from "./Leaderboard"
import Login from "./Login"
import Signup from "./Signup"
import Trade from "./Trade"

const Dashboard = () => {

    const [viewState, setViewState] = useViewState()

    return ( 
        <DashboardContainer>
            <VerticalFlexBox alignItems='center'>
                <Balance />
                <BiggestMovers />
                <Trade />
            </VerticalFlexBox>
            <VerticalFlexBox>
                <Card>
                    {viewState === 'dashboard' && <Chart />}
                    {viewState === 'login' && <Login />}
                    {viewState === 'signup' && <Signup />}
                    {viewState === 'coins' && <CoinIndex />}
                </Card>
                <Assets />
            </VerticalFlexBox>
            <Leaderboard />
        </DashboardContainer>
    )

}

export default Dashboard