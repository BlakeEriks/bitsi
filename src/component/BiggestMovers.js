import { useChartState } from "../hooks/chartState"
import { useTokens } from "../hooks/token"
import { Card, Padding } from "../styles/Boxes"
import { Mover, PercentChange, SubHeader } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"
import { toDollarFormat } from "../util/dollarUtil"

const BiggestMovers = () => {

    const {tokens} = useTokens()
    const [chartState, setChartState] = useChartState()

    const NUM_MOVERS = 5

    const getBiggestMovers = () => {
        const sorted = tokens.sort( (a,b) => Math.abs(b.percentChange) - Math.abs(a.percentChange))
        return sorted.slice(0, NUM_MOVERS)
    }

    return (
        <Card>
            <Padding>
                <SubHeader>
                    Top Movers    
                </SubHeader>
                {tokens && 
                getBiggestMovers().map( token => 
                    <Mover key={token.symbol} onClick={() => setChartState({mode: 'token', token: token.symbol})}>
                        {token.symbol + ' '}
                        <InfoText>
                            {toDollarFormat(token.price)}
                            <PercentChange positive={token.percentChange > 0}>
                                ({(token.percentChange > 0 ? '+' : '') + token.percentChange}%)
                            </PercentChange>
                        </InfoText>
                    </Mover>)}
            </Padding>
        </Card>
    )
}

export default BiggestMovers