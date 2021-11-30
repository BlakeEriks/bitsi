import styled from "styled-components";
import { colors } from "./Colors";

export const LoginInput = styled.input`
    font-family: Arial, Helvetica, sans-serif;
    border: 1.3px solid ${colors.dark};
    border-radius: 5px;
    color: ${colors.dark};
    margin: 1px 2px;
    font-size: ${fontSizes.xSmall};
    outline: none;
    padding: 20 10px;
    width: 130px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;

    &:last-child {
        border-bottom-left-radius: 10px;
    }
`