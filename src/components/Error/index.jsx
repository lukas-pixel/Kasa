import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import LogoError from '../../assets/404.png'

const ErrorContainer = styled.div`
    text-align: center;
`

const ErrorLogo = styled.img`
    height: 260px;
    width: auto;
    margin: 95px 0 30px 0;
`

const ErrorTxt = styled.h2`
    margin: 30px 0 180 0;
    color: ${colors.primary};
`

const ErrorLink = styled(Link)`
    margin-bottom: 30px;
    color: ${colors.primary};
`

function Error() {
    return (
        <ErrorContainer>
            <ErrorLogo src={LogoError} alt="404 Logo" />
            <ErrorTxt>Oups! La page que vous demandez n'existe pas.</ErrorTxt>
            <ErrorLink to='/'>Retourner sur la page d'accueil</ErrorLink>
        </ErrorContainer>
    )
}

export default Error