import { useState } from "react"
import { useAuthState } from "../hooks/auth"
import useUserActions from "../hooks/user"
 
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
        <div>
            <form onSubmit={handleSubmit} method="post">
                <div>
                    <input type="text" name="username" value={form.username} onChange={onChange} placeholder="username" required></input>
                </div>
                <div>
                    <input type="password" name="password" value={form.password} onChange={onChange} placeholder="password" required></input>
                </div>

                <div>
                    <button type="submit" value="Login">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Signup