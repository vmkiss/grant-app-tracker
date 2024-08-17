import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </header>
    )
}

export default Navbar