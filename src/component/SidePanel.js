import { SidePanelContainer } from "../styles/Boxes"
import { IconButton } from "../styles/Button"
import { CoinsIcon, DoorClosedIcon, HomeIcon } from "../styles/Icon"

const SidePanel = () => {

    return (
        <SidePanelContainer>
            <IconButton>
                <HomeIcon />
            </IconButton>
            <IconButton>
                <CoinsIcon />
            </IconButton>
            <IconButton>
                <DoorClosedIcon />
            </IconButton>
        </SidePanelContainer>
    )
}

export default SidePanel