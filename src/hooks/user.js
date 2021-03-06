import { useQueryClient } from "react-query";
import { useAuthState } from "./auth";
import useHttp from "./http";
import { useViewState } from "./view";

const useUserActions = () => {
    
    const http = useHttp()
    const [auth, setAuth] = useAuthState()
    const [viewState, setViewState] = useViewState()
    const queryClient = useQueryClient()

    const API_BASE_URL = process.env.REACT_APP_API_URL
    
    const login = ({ username, password }) => {
        return http.post(`${API_BASE_URL}/authenticate`, {username, password})
            .then( data => {
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth(data)
                setViewState('chart')
            })
    }

    const register = ({ username, password }) => {
        return http.post(`${API_BASE_URL}/register`, { username, password })
            .then( data => {
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth(data)
                setViewState('chart')
                queryClient.invalidateQueries('portfolio')
            })
    }

    const logout = () => {
        localStorage.removeItem('auth');
        setAuth(null)
    }

    return {
        login,
        logout,
        register
    }
}

export default useUserActions