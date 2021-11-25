import { useState } from "react"
import { useAuthState } from "../hooks/auth"
import usePortfolio from "../hooks/portfolio"
import { useToken, useTokens } from "../hooks/token"
import { HorizontalFlexBox } from "../styles/Boxes"
import { TradeButton } from "../styles/Button"
import { TradeContainer, TradeSelect, TradeOption, TradeInput } from "../styles/SidePanel"
import { InfoText } from "../styles/Text"
import toDollarFormat from "../util/dollarFormat"

const Trade = () => {
    const [method, setMethod] = useState("BUY")
    const [form, setForm] = useState({ token: "BTC", quantity: "" })
    const [errorText, setErrorText] = useState("")
    const { token } = useToken(form.token)
    const { tokens } = useTokens()
    const [auth] = useAuthState()
    const { makeTrade } = usePortfolio(auth?.username)

    const handleChange = (event) =>
        setForm({ ...form, [event.target.name]: event.target.value })

    const handleSubmit = async (event) => {
        event.preventDefault()
        /* execute the trade */
        const order = {
            method,
            symbol: form.token,
            quantity: Number(form.quantity),
            price: token.price,
        }

        const res = await makeTrade(order)
        setErrorText(res.success ? "" : res.error)
    }

  return (
    <TradeContainer>
        <InfoText>Make A Trade</InfoText>
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
            <TradeSelect name="token" value={form.token} onChange={handleChange}>
                {tokens?.map((token, index) => (
                    <option key={index} value={token.token}>
                        {token.token} {toDollarFormat(token.price)}
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
            <InfoText>Total: {toDollarFormat(token.price * form.quantity)}</InfoText>
            <TradeButton selected type="submit">
            Submit
            </TradeButton>
            <div>{errorText}</div>
        </form>
    </TradeContainer>
  )
}

export default Trade
