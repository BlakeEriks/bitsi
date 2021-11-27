import { useAuthState } from "../hooks/auth"
import { usePortfolio } from "../hooks/portfolio"
import { SidePanelContainer } from "../styles/Boxes"
import { BalanceText } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"
import toDollarFormat from "../util/dollarFormat"
import Trade from "./Trade"

const SidePanel = () => {

    const [auth] = useAuthState()
    const {balance} = usePortfolio(auth?.username)

    return (
        <SidePanelContainer>
            <BalanceText>{toDollarFormat(balance)}</BalanceText>
            <InfoText>Balance</InfoText>
            <div style={{background: 'black', height: '200px', margin: '30px'}}>
                biggest movers
            </div>
            <Trade />
        </SidePanelContainer>
    )
}

export default SidePanel