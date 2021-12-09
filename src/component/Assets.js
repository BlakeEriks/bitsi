import { useAuthState } from "../hooks/auth"
import { usePortfolio } from "../hooks/portfolio"
import { AssetsContainer } from "../styles/Assets"
import { Card, Padding } from "../styles/Boxes"
import { SubHeader } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"
import Asset from "./Asset"

const Assets = () => {

    const [auth] = useAuthState()
    const {assets, isSuccess} = usePortfolio(auth?.username)
    
    return (
        <Card>
            <Padding>
                <SubHeader>
                    Assets
                </SubHeader>
                <AssetsContainer>
                    {isSuccess && assets.map( asset => <Asset key={asset._id} {...asset}></Asset>)}
                    {!auth?.username && <InfoText>Log In To Trade Assets</InfoText>}
                </AssetsContainer>
            </Padding>
        </Card>
    )
}

export default Assets