import { useAuthState } from "../hooks/auth"
import { usePortfolio } from "../hooks/portfolio"
import { Card, Padding } from "../styles/Boxes"
import { BalanceText } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"
import { toDollarFormat } from "../util/dollarUtil"

const Balance = () => {

    const [auth] = useAuthState()
    const {balance} = usePortfolio(auth?.username)

    return (
        <Card>
            <Padding>
                <BalanceText>{toDollarFormat(isNaN(balance) ? 0 : balance)}</BalanceText>
                <InfoText>Balance</InfoText>
            </Padding>
        </Card>
    )

}

export default Balance