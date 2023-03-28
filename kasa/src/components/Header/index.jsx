import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import logo from '../../assets/LogoHeader.png'

const StyledLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    color: ${colors.primary};
    text-align: center;
    Font-family: 'Montserrat';
    font-size: 24px;
    :hover {
        text-decoration: underline;
    }
`

const HomeLogo = styled.img`
    height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
    return (
        <NavContainer>
            <HomeLogo src={logo} alt="Logo Kasa" />
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/propos">A Propos</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header