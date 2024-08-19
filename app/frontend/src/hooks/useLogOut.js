import { useAuthContext } from "./useAuthContext"
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const redirect = useNavigate()

    const logout = () => {
        // Remove user from local storage
        localStorage.removeItem('user')

        // Dispatch logout action
        dispatch({type: 'LOGOUT'})

        // Redirect to login page
        redirect("/")
    }

    return {logout}

}