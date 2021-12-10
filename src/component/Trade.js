import { useState } from "react"
import { useAuthState } from "../hooks/auth"
import { usePortfolio } from "../hooks/portfolio"
import { useToken, useTokens } from "../hooks/token"
import useTrade from "../hooks/trade"
import { Card, HorizontalFlexBox, Padding } from "../styles/Boxes"
import { TradeButton } from "../styles/Button"
import { SubHeader, TradeInput, TradeSelect } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"
import { toDollarFormat } from "../util/dollarUtil"

const Trade = () => {

    const [auth] = useAuthState()
    const [method, setMethod] = useState("BUY")
    const [form, setForm] = useState({ symbol: "BTC", quantity: "" })
    const [errorText, setErrorText] = useState("")
    const { balance, assets } = usePortfolio(auth?.username)
    const { token } = useToken(form.symbol)
    const { tokens } = useTokens()
    const makeTrade = useTrade()

    const handleChange = (event) =>
        setForm({ ...form, [event.target.name]: event.target.value })

    const handleSubmit = async (event) => {
        event.preventDefault()
        /* execute the trade */
        const order = {
            method,
            symbol: form.symbol,
            quantity: Number(form.quantity),
            price: token.price,
        }

        const res = await makeTrade(order)
        setForm({ symbol: "BTC", quantity: "" })
        setErrorText(res.success ? "" : res.error)
    }

    const tradeAll = () => {
        if (method === 'BUY') {
            setForm({...form, quantity: (balance / token.price).toFixed(10)})
        }
        if (method === 'SELL') {
            const ownedAsset = assets.find(asset => asset.symbol === token.symbol)
            if (ownedAsset) {
                setForm({...form, quantity: ownedAsset.quantity})
            }
        }
    }

    const getTradeOptions = () => {
        let tokenOptions = tokens
        if (method === 'SELL') {
            tokenOptions = tokens.filter(token => assets.some(asset => asset.symbol === token.symbol))
        }
        return tokenOptions?.map((token, index) => (
            <option key={index} value={token.symbol}>
                {token.symbol} {toDollarFormat(token.price)}
            </option>
        ))
    }

  return (
    <Card>
        <Padding>
            <SubHeader>Make A Trade</SubHeader>
            <HorizontalFlexBox justifyContent="space-around" width="100%">
                <TradeButton
                    selected={method === "BUY"}
                    onClick={() => setMethod("BUY")}
                >
                BUY
                </TradeButton>
                <TradeButton
                    selected={method === "SELL"}
                    onClick={() => setMethod("SELL")}
                >
                SELL
                </TradeButton>
            </HorizontalFlexBox>
            <form onSubmit={handleSubmit}>
                <InfoText>Token</InfoText>
                <TradeSelect name="symbol" value={form.symbol} onChange={handleChange}>
                    {getTradeOptions()}
                </TradeSelect>
                <InfoText>Quantity</InfoText>
                <HorizontalFlexBox alignItems='center'>
                    <TradeInput
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                    />
                    <TradeButton onClick={() => tradeAll()} type="button">All</TradeButton>
                </HorizontalFlexBox>
                <InfoText>Total: {toDollarFormat(token?.price * form.quantity)}</InfoText>
                <TradeButton type="submit" disabled={!auth}>
                Submit
                </TradeButton>
                <InfoText>{errorText}</InfoText>
            </form>
        </Padding>
    </Card>
  )
}

export default Trade
