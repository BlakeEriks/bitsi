import { useAuthState } from "../hooks/auth"
import { useChartState } from "../hooks/chartState"
import useUserActions from "../hooks/user"
import { useViewState } from "../hooks/view"
import { HeaderContainer, HeaderContent, HeaderLink, HeaderLinkDivider, HeaderTitle } from "../styles/Header"

const Header = () => {

    const [auth] = useAuthState()
    const [view, setViewState] = useViewState()
    const [chartState, setChartState] = useChartState()
    const {logout} = useUserActions()

    return (
        <HeaderContainer>
            <HeaderTitle onClick={() => setChartState({mode: 'portfolio', username: auth?.username})}>
                JAB
            </HeaderTitle>
            <HeaderContent>
                {auth ?
                <>
                    <HeaderLink>{auth.username}</HeaderLink>    
                    <HeaderLinkDivider />
                    <HeaderLink onClick={() => logout()}>Logout</HeaderLink>
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