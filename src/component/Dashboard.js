import { useState } from "react"
import { DashboardContainer, VerticalFlexBox } from "../styles/Boxes"
import Assets from "./Assets"
import Chart from "./Chart"
import Leaderboard from "./Leaderboard"

const Dashboard = () => {

    const [viewState, setViewState] = useState('dashboard')

    return ( 
        <DashboardContainer>
            <VerticalFlexBox>
                <Chart />
                <Assets />
            </VerticalFlexBox>
            <Leaderboard />
        </DashboardContainer>
    )

}

export default Dashboard