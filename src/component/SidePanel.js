import { useAuthState } from "../hooks/auth"
import { usePortfolio } from "../hooks/portfolio"
import { SidePanelContainer } from "../styles/Boxes"
import { BalanceText } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"
import { toDollarFormat } from "../util/dollarUtil"
import BiggestMovers from "./BiggestMovers"
import Trade from "./Trade"

const SidePanel = () => {

    const [auth] = useAuthState()
    const {balance} = usePortfolio(auth?.username)

    return (
        <SidePanelContainer>
            <BalanceText>{toDollarFormat(balance)}</BalanceText>
            <InfoText>Balance</InfoText>
            <BiggestMovers />
            <Trade />
        </SidePanelContainer>
    )
}

export default SidePanel