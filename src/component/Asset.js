import { useTokens } from "../hooks/token"
import { AssetContainer } from "../styles/Assets"
import { toDollarFormat } from "../util/dollarUtil"


const Asset = ({symbol, quantity}) => {

    const {tokens} = useTokens()

    const getValue = (symbol, quantity) => {
        const token = tokens.find(token => token.symbol === symbol)
        if (token) {
            return token.price * quantity
        }
    }

    return (
        <AssetContainer>
            <div className='quantity'>
                {quantity + ' ' + symbol}
            </div>
            <div className='value'>
                {toDollarFormat(getValue(symbol, quantity))}
            </div>
        </AssetContainer>
    )
}

export default Asset