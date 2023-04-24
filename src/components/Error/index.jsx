import './Error.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import LogoError from '../../assets/404.png'

const ErrorLink = styled(Link)`
    margin-bottom: 30px;
    color: ${colors.primary};
`

function Error() {
    return (
        <div className='ErrorContainer'>
            <img className='ErrorLogo' src={LogoError} alt="404 Logo" />
            <div className='ContianerText'>
                <h2 className='ErrorTxt'>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <ErrorLink to='/'>Retourner sur la page d'accueil</ErrorLink>
        </div>
    )
}

export default Error