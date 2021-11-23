import { useState } from "react"
import { Link } from "react-router-dom"
 
const Login = () => { 
    
    const userActions = useUserActions()
    const [form, setForm] = useState({username: '', password: ''})
    const [badLogin, setBadLogin] = useState(false)
    const [auth] = useAuthState()

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
        <div class="card">
            <form onSubmit={handleSubmit} action="" method="post">
                
                <div className="container">
                        <Input type="text" name="username" value={form.username} onChange={onChange} placeholder="username" required></Input>
                    </div>

                    <div className="container">
                        <Input type="password" name="password" value={form.password} onChange={onChange} placeholder="password" required></Input>
                    </div>

                    <div className="container">
                        <LoginButton type="submit" value="Login">Login</LoginButton>
                    </div>

            </form>
            
        </div>
    

    )
}

export default Login