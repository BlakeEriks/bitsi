import { useAuthState } from "../hooks/auth"
import { usePortfolio } from "../hooks/portfolio"
import { Card } from "../styles/Boxes"
import { BalanceText } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"
import { toDollarFormat } from "../util/dollarUtil"

const Balance = () => {

    const [auth] = useAuthState()
    const {balance} = usePortfolio(auth?.username)

    return (
        <Card>
            <BalanceText>{toDollarFormat(isNaN(balance) ? 0 : balance)}</BalanceText>
            <InfoText>Balance</InfoText>
        </Card>
    )

}

export default Balance