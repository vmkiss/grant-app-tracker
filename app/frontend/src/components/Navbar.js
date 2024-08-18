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
                        <span>{user.email}</span>
                        <button class="btn btn-success btn-lg mx-2 mt-2" onClick={handleClick}>Log out</button>
                    </div>
                )}
                {!user && (
                    <div>
                        <Link to="/login">
                        <  button class="btn btn-success btn-lg mx-2 mt-2">Log in</button>
                        </Link>
                        <Link to="/signup">
                            <button class="btn btn-success btn-lg mx-2 mt-2">Sign up</button>
                        </Link>
                    </div>
                    )}
                </nav>
                
        
            </div>
        </header>
    )
}

export default Navbar