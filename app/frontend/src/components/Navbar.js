import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogOut'

const Navbar = () => {
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div class="d-flex justify-content-end">
                <Link to="/login">
                    <button class="btn btn-success btn-lg mx-2 mt-2">Log in</button>
                </Link>
                <nav>
                    <div>
                        <button onclick={handleClick}>Log out</button>
                    </div>
                </nav>
                <Link to="/signup">
                    <button class="btn btn-success btn-lg mx-2 mt-2">Sign up</button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar