import './Error.css'
import { Link } from 'react-router-dom'
import LogoError from '../../assets/404.png'

function Error() {
    return (
        <div className='ErrorContainer'>
            <img className='ErrorLogo' src={LogoError} alt="404 Logo" />
            <h2 className='ErrorTxt'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className='ErrorLink' to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error