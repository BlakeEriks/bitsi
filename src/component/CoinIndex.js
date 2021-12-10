import { useChartState } from "../hooks/chartState"
import { useTokens } from "../hooks/token"
import { ChartTitle } from "../styles/Chart"
import { Token, TokenContainer } from "../styles/Tokens"
import { toDollarFormat } from "../util/dollarUtil"

const CoinIndex = () => {

    const { tokens } = useTokens()
    const [chartState, setChartState] = useChartState()

    return (
        <>
            <ChartTitle>
                Token Index
            </ChartTitle>
            <TokenContainer>
                {tokens.sort( (a,b) => b.price - a.price).map( token => (
                    <Token key={token.symbol} onClick={() => setChartState({mode: 'token', token: token.symbol})}>
                        <div className="name">
                            {token.name}
                                <span className="symbol">
                                    ({token.symbol})
                                </span>
                        </div>
                        <div className="price">
                            {toDollarFormat(token.price)}
                        </div>
                    </Token>
                ))}
            </TokenContainer>
        </>
    )
}

export default CoinIndex