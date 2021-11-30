import { useState } from "react"
import { useAuthState } from "../hooks/auth"
import useUserActions from "../hooks/user"

import { LoginInput } from "../styles/Input"
import { LoginButton } from "../styles/Button"
import { Card } from "../styles/Boxes"
import { Link } from "react-router-dom";
 
const Signup = () => { 
    
    const userActions = useUserActions()
    const [form, setForm] = useState({username: '', password: ''})
    const [badLogin, setBadLogin] = useState(false)
    const [auth] = useAuthState()

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await userActions.register({...form})
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
                    <Logininput type="text" name="username" value={form.username} onChange={onChange} placeholder="username" required></Logininput>
                </div>
                <div>
                    <Logininput type="password" name="password" value={form.password} onChange={onChange} placeholder="password" required></Logininput>
                </div>

                <div>
                    <Loginbutton type="submit" value="Login">Login</Loginbutton>
                </div>
                </Card>
            </fieldset>
            </form>
        </div>
    )
}

export default Signup