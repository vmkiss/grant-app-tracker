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
                    <img src="https://via.placeholder.com/50" alt="Logo" width="40" height="40" class="d-inline-block align-text-top"/>
                    MyLogo
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    </ul>
                </div>
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