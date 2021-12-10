import * as faSolid from '@styled-icons/fa-solid'
import styled from "styled-components"

const IconStyles = `
    width: 32px;
    height: 32px;
    transition: color 0.3s ease-in-out;
`

export const HomeIcon = styled(faSolid.Home)`
    ${IconStyles}
`

export const CoinsIcon = styled(faSolid.Coins)`
    ${IconStyles}
`

export const DoorClosedIcon = styled(faSolid.DoorOpen)`
    ${IconStyles}
`

export const TimesIcon = styled(faSolid.Times)`
    height: 15px;
`