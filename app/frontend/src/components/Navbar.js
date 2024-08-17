import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div class="d-flex justify-content-end">
                <Link to="/login">
                    <button class="btn btn-success btn-lg mx-2 mt-2">Log in</button>
                </Link>
                <Link to="/signup">
                    <button class="btn btn-success btn-lg mx-2 mt-2">Sign up</button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar