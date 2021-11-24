import usePortfolio from "../hooks/portfolio"
import { Card } from "../styles/Boxes"

const Assets = () => {

    const username = 'blake1'

    const {assets} = usePortfolio(username)

    return (
        <Card>
            Assets
        </Card>
    )
}

export default Assets