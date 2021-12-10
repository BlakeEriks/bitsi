import { useChartState } from "../hooks/chartState"
import { useTokens } from "../hooks/token"
import { AssetContainer } from "../styles/Assets"
import { shortenQuantity, toDollarFormat } from "../util/dollarUtil"


const Asset = ({symbol, quantity}) => {

    const {tokens} = useTokens()
    const [chartState, setChartState] = useChartState()

    const getValue = (symbol, quantity) => {
        const token = tokens?.find(token => token.symbol === symbol)
        if (token) {
            return token.price * quantity
        }
    }

    return (
        <AssetContainer onClick={() => setChartState({mode: 'token', token: symbol})}>
            <div className='quantity'>
                {shortenQuantity(quantity) + ' ' + symbol}
            </div>
            <div className='value'>
                {toDollarFormat(getValue(symbol, quantity))}
            </div>
        </AssetContainer>
    )
}

export default Asset