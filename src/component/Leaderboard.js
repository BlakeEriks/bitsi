import { useAuthState } from "../hooks/auth"
import { useChartState } from "../hooks/chartState"
import { usePortfolios } from "../hooks/portfolio"
import { Card, VerticalFlexBox } from "../styles/Boxes"
import { Entry } from "../styles/Leaderboard"
import { SubHeader } from "../styles/SidePanel"
import { InfoText, NameText } from "../styles/Text"
import { shortenDollar } from "../util/dollarUtil"

const Leaderboard = () => {
    
    const leaderboard = usePortfolios()
    const [chartState, setChartState] = useChartState()
    const [auth] = useAuthState()

    return (
        <Card width='10em'>
            <SubHeader>
                Leaderboard
            </SubHeader>
            <VerticalFlexBox>
                {leaderboard?.map( (user, index) => 
                    <Entry key={index} onClick={() => setChartState({mode: 'portfolio', username: user.username})} highlight={user.username === auth?.username}>
                        <NameText>{index+1 + '.' + ' ' + user.username}</NameText>
                        <InfoText>{shortenDollar(user.value)}</InfoText>
                    </Entry>
                )}
            </VerticalFlexBox>
        </Card>
    )
}

export default Leaderboard