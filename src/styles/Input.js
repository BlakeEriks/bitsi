import styled from "styled-components";
import { colors } from "./Colors";

export const LoginInput = styled.input`
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid ${colors.dark};
    border-radius: 10px;
    color: ${colors.dark};
    margin: 1px 4px;
    font-size: 1rem;
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