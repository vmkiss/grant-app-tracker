import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogOut'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header><div class="d-flex justify-content-end">
            <nav>
                {user && (
                    <div>
                        <img src="app/frontend/src/GrantHeader.png" alt="logo of hands holding heart with dollar sign"/>
                        <span>{user.email}</span>
                        <button class="btn btn-success btn-lg mx-2 mt-2" onClick={handleClick}>Log out</button>
                    </div>
                )}
                
                {!user && (
                    <div>
                    </div>
                    )}
                </nav>
                
        
            </div>
        </header>
    )
}

export default Navbar