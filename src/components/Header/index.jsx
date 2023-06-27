import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/2">Home2</Link>
        </nav>
    )
}

export default Header