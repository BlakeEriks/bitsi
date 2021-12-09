import { useState } from "react"
import { useAuthState } from "../hooks/auth"
import { useChartState } from "../hooks/chartState"
import useUserActions from "../hooks/user"
import { HeaderContainer, HeaderContent, HeaderLink, HeaderLinkDivider, HeaderTitle } from "../styles/Header"
import Login from "./Login"

const Header = () => {

    const [auth] = useAuthState()
    const [viewState, setViewState] = useState('default')
    const [chartState, setChartState] = useChartState()
    const {logout} = useUserActions()

    return (
        <HeaderContainer>
            <HeaderTitle onClick={() => setChartState({mode: 'portfolio', username: auth?.username})}>
                Bitsi
            </HeaderTitle>
            <HeaderContent>
                {auth ?
                <>
                    <HeaderLink>{auth.username}</HeaderLink>    
                    <HeaderLinkDivider />
                    <HeaderLink onClick={() => logout()}>Logout</HeaderLink>
                </>
                : 
                viewState === 'login' || viewState === 'signup' ?
                <>
                    <Login viewState={viewState} setViewState={setViewState}/>
                </>
                :
                <>
                    <HeaderLink onClick={() => setViewState('login')}>Log In</HeaderLink>
                    <HeaderLinkDivider />
                    <HeaderLink onClick={() => setViewState('signup')}>Sign Up</HeaderLink>
                </>
                }
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header