import { useChartState } from "../hooks/chartState"
import { useTokens } from "../hooks/token"
import { Mover, MoversContainer, PercentChange, SubHeader } from "../styles/SidePanel"

const BiggestMovers = () => {

    const {tokens} = useTokens()
    const [chartState, setChartState] = useChartState()

    const NUM_MOVERS = 5

    const getBiggestMovers = () => {
        const sorted = tokens.sort( (a,b) => Math.abs(b.percentChange) - Math.abs(a.percentChange))
        return sorted.slice(0, NUM_MOVERS)
    }

    return (
        <MoversContainer>
            <SubHeader>
                Top Movers    
            </SubHeader>
            {tokens && 
            getBiggestMovers().map( token => 
                <Mover key={token.symbol} onClick={() => setChartState({mode: 'token', token: token.symbol})}>
                    {token.symbol}
                    <PercentChange positive={token.percentChange > 0}>
                        {token.percentChange}%
                    </PercentChange>
                </Mover>)}
        </MoversContainer>
    )
}

export default BiggestMovers