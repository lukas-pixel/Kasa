import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/LogoHeader.png'

function Header() {
    return (
        <div className='NavContainer'>
            <img className='HomeLogo' src={logo} alt="Logo Kasa" />
            <div>
                <Link className='StyledLink' to="/">Accueil</Link>
                <Link className='StyledLink' to="/about">A Propos</Link>
            </div>
        </div>
    )
}

export default Header