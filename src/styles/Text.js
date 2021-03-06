import styled from "styled-components"
import { colors } from "./Colors"

export const InfoText = styled.div`
    color: ${colors.gray};
`

export const NameText = styled.div`
    color: ${props => props.highlight ? colors.accent : colors.gray};
`