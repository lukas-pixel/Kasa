import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import LogoError from '../../assets/404.png'

const ErrorContainer = styled.div`
    text-align: center;
`

const ErrorLogo = styled.img`
    height: 263px;
    width: 597px;
`
const ErrorLink = styled(Link)`
    color: ${colors.primary};
`

function Error() {
    return (
        <ErrorContainer>
            <div>
                <ErrorLogo src={LogoError} alt="404 Logo" />
            </div>
            <div>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <div>
                <ErrorLink to='/'>Retourner sur la page d'accueil</ErrorLink>
            </div>
        </ErrorContainer>
    )
}

export default Error