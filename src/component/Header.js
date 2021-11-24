import { useAuthState } from "../hooks/auth"
import { useViewState } from "../hooks/view"
import { HeaderContainer, HeaderContent, HeaderLink, HeaderLinkDivider, HeaderTitle } from "../styles/Header"

const Header = () => {

    const [auth] = useAuthState()
    const [view, setViewState] = useViewState()

    return (
        <HeaderContainer>
            <HeaderTitle>
                JAB
            </HeaderTitle>
            <HeaderContent>
                {auth ? auth.username : 
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