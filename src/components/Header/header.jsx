import { Link } from 'react-router-dom';
import kasaLogo from '../../assets/logo/LOGO.png'
import './header.scss'
 
function Header() {
    return (

        <div className='header'>
            <img src={kasaLogo} alt="logo de la societe kasa" className='header-img'></img>
            <nav className='header-nav'>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
            </nav>
        </div>
        
    )
}

export default Header