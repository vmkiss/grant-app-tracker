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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="GrantHeader.png" alt="Logo" width="250" height="100" class="d-inline-block align-text-top"/>
                </a>

                {user && (
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <button class="btn btn-success btn-lg mx-2 mt-2">{user.email}</button>
                    </li>
                    <li className="nav-item">
                        <button class="btn btn-success btn-lg mx-2 mt-2" onClick={handleClick}>Log out</button>
                    </li>
                    </ul>
                </div>
            )}
            </div>
        </nav>
    )
}

    /*return (
        <header><div class="d-flex">
            <nav>
                {user && (
                    <div>
                        <img src="GrantTracker.png" alt="logo of hands holding heart with dollar sign"/>
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
}*/

export default Navbar