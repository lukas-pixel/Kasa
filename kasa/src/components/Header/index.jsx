import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'

const StyledLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    color: ${colors.primary};
    text-align: center;
    Font-family: 'Montserrat';
    font-size: 24px;
`

function Header() {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/propos">A Propos</StyledLink>
        </nav>
    )
}

export default Header