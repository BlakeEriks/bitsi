import { useAuthState } from "../hooks/auth"
import { usePortfolio } from "../hooks/portfolio"
import { Card } from "../styles/Boxes"
import { SubHeader } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"

const Assets = () => {

    const [auth] = useAuthState()
    const {assets, isSuccess} = usePortfolio(auth?.username)
    return (
        <Card>
            <SubHeader>
                Assets
            </SubHeader>
            {isSuccess && assets.map( asset => <InfoText key={asset._id}>{asset.symbol} : {asset.quantity}</InfoText>)}
            {!auth?.username && <InfoText>Log In To Trade Assets</InfoText>}
        </Card>
    )
}

export default Assets