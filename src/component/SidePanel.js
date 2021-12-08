import { useViewState } from "../hooks/view"
import { SidePanelContainer } from "../styles/Boxes"
import { IconButton } from "../styles/Button"
import { CoinsIcon, DoorClosedIcon, FriendsIcon, HomeIcon } from "../styles/Icon"

const SidePanel = () => {

    const [viewState, setViewState] = useViewState() 

    return (
        <SidePanelContainer>
            <IconButton selected={['login', 'signup', 'dashboard'].includes(viewState)}>
                <HomeIcon />
            </IconButton>
            <IconButton selected={viewState==false}>
                <CoinsIcon />
            </IconButton>
            <IconButton selected={viewState==false}>
                <FriendsIcon />
            </IconButton>
            <IconButton selected={viewState==false}>
                <DoorClosedIcon />
            </IconButton>
        </SidePanelContainer>
    )
}

export default SidePanel