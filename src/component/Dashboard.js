import { useViewState } from "../hooks/view"
import { Card, DashboardContainer, DashboardLeft } from "../styles/Boxes"
import Assets from "./Assets"
import Chart from "./Chart"
import Leaderboard from "./Leaderboard"
import Login from "./Login"
import Signup from "./Signup"

const Dashboard = () => {

    const [viewState, setViewState] = useViewState()

    return ( 
        <DashboardContainer>
            <DashboardLeft>
                <Card>
                    {viewState === 'dashboard' && <Chart />}
                    {viewState === 'login' && <Login />}
                    {viewState === 'signup' && <Signup />}
                </Card>
                <Assets />
            </DashboardLeft>
            <Leaderboard />
        </DashboardContainer>
    )

}

export default Dashboard