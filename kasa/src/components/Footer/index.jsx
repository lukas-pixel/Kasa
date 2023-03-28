import logoFooter from '../../assets/LogoFooter.png'
import styled from 'styled-components'
import colors from '../../style/colors'

const FooterLogo = styled.img`
    height: 40px;
`

const FooterText = styled.h2`
    color: ${colors.secondary};
`

function Footer() {
    return (
        <div>
            <FooterLogo src={logoFooter} alt="Logo Kasa" />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </div>
    )
}

export default Footer