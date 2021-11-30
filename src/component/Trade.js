import { useState } from "react"
import { useAuthState } from "../hooks/auth"
import { useToken, useTokens } from "../hooks/token"
import useTrade from "../hooks/trade"
import { HorizontalFlexBox } from "../styles/Boxes"
import { TradeButton } from "../styles/Button"
import { SubHeader, TradeContainer, TradeInput, TradeSelect } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"
import { toDollarFormat } from "../util/dollarUtil"

const Trade = () => {

    const [auth] = useAuthState()
    const [method, setMethod] = useState("BUY")
    const [form, setForm] = useState({ symbol: "BTC", quantity: "" })
    const [errorText, setErrorText] = useState("")
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

  return (
    <TradeContainer>
        <SubHeader>Make A Trade</SubHeader>
        <HorizontalFlexBox justifyContent="space-around" width="80%">
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
                {tokens?.map((token, index) => (
                    <option key={index} value={token.symbol}>
                        {token.symbol} {toDollarFormat(token.price)}
                    </option>
                ))}
            </TradeSelect>
            <InfoText>Quantity</InfoText>
            <TradeInput
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
            ></TradeInput>
            <InfoText>Total: {toDollarFormat(token?.price * form.quantity)}</InfoText>
            <TradeButton selected type="submit" disabled={!auth}>
            Submit
            </TradeButton>
            <div>{errorText}</div>
        </form>
    </TradeContainer>
  )
}

export default Trade
