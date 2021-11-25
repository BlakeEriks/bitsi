import { useAuthState } from "../hooks/auth"
import { usePortfolio } from "../hooks/portfolio"
import { Card } from "../styles/Boxes"

const Assets = () => {

    const [auth] = useAuthState()
    const {assets, isSuccess} = usePortfolio(auth?.username)
    return (
        <Card>
            {isSuccess && assets.map( asset => <div key={asset._id}>{asset.symbol} : {asset.quantity}</div>)}
        </Card>
    )
}

export default Assets