import { useState } from "react"
import useUserActions from "../hooks/user"
import { HorizontalFlexBox } from "../styles/Boxes"
import { IconButton, LoginButton } from "../styles/Button"
import { TimesIcon } from "../styles/Icon"
import { LoginInput } from "../styles/Input"
 
const Login = ({viewState, setViewState}) => { 
    
    const userActions = useUserActions()
    const [form, setForm] = useState({username: '', password: ''})
    const [badLogin, setBadLogin] = useState(false)

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            if (viewState == 'login') {
                await userActions.login({...form})
            }
            else {
                await userActions.register({...form})
            }
            setViewState('default')
        }
        catch (err) {
            setBadLogin(true)
        }
    }

    const onChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit} method="post">
            <HorizontalFlexBox>
                <LoginInput autoFocus type="text" name="username" value={form.username} onChange={onChange} placeholder="username" required />
                <LoginInput type="password" name="password" value={form.password} onChange={onChange} placeholder="password" required />
                <LoginButton type="submit">{viewState == 'login' ? 'Login' : 'Sign Up'}</LoginButton>
                <IconButton onClick={() => setViewState('default')}>
                    <TimesIcon />
                </IconButton>
            </HorizontalFlexBox>
        </form>
    )
}

export default Login