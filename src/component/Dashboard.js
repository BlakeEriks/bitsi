import { useViewState } from "../hooks/view"
import { Card, DashboardContainer, VerticalFlexBox } from "../styles/Boxes"
import Assets from "./Assets"
import Chart from "./Chart"
import Leaderboard from "./Leaderboard"
import Login from "./Login"
import Signup from "./Signup"

const Dashboard = () => {

    const [viewState, setViewState] = useViewState()

    return ( 
        <DashboardContainer>
            <VerticalFlexBox>
                <Card width='50em'>
                    {viewState === 'dashboard' && <Chart />}
                    {viewState === 'login' && <Login />}
                    {viewState === 'signup' && <Signup />}
                </Card>
                <Assets />
            </VerticalFlexBox>
            <Leaderboard />
        </DashboardContainer>
    )

}

export default Dashboard