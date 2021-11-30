import { React , useState } from "react"
import useUserActions from "../hooks/user"

import { LoginInput } from "../styles/Input"
import { LoginButton } from "../styles/Button"
import { Card } from "../styles/Boxes"
import { Link } from "react-router-dom";


const Login = () => { 
    
    const userActions = useUserActions()
    const [form, setForm] = useState({username: '', password: ''})
    const [badLogin, setBadLogin] = useState(false)

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await userActions.login({...form})
        }
        catch (err) {
            setBadLogin(true)
        }
    }

    const onChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} method="post">
                <fieldset>
                <Card>
                
                <div>
                    <LoginInput type="text" name="username" value={form.username} onChange={onChange} placeholder="username" required></LoginInput>
                </div>
                <div>
                    <LoginInput  type="password" name="password" value={form.password} onChange={onChange} placeholder="password" required></LoginInput>
                </div>
                <div>
                    <LoginButton  type="submit" value="Login">Login</LoginButton>
                </div>
            </Card>
            </fieldset>
        </form>
        </div>
        
    )
}

export default Login