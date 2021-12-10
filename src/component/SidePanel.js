import useUserActions from "../hooks/user"
import { useViewState } from "../hooks/view"
import { SidePanelContainer } from "../styles/Boxes"
import { IconButton } from "../styles/Button"
import { CoinsIcon, DoorClosedIcon, HomeIcon } from "../styles/Icon"

const SidePanel = () => {

    const [viewState, setViewState] = useViewState() 
    const userActions = useUserActions()

    return (
        <SidePanelContainer>
            <IconButton selected={viewState === 'chart'} onClick={() => setViewState('chart')}>
                <HomeIcon />
            </IconButton>
            <IconButton selected={viewState === 'coins'} onClick={() => setViewState('coins')}>
                <CoinsIcon />
            </IconButton>
            <IconButton selected={viewState===false} onClick={() => userActions.logout()}>
                <DoorClosedIcon />
            </IconButton>
        </SidePanelContainer>
    )
}

export default SidePanel