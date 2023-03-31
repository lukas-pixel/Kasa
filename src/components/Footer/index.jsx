import logoFooter from '../../assets/LogoFooter.png'
import styled from 'styled-components'
import colors from '../../style/colors'

const FooterContainer = styled.div`
    background-color: ${colors.tertiary};
    text-align: center;
    padding: 20px 0px 20px 0px
`

const FooterLogo = styled.img`
    height: 40px;
`

const FooterText = styled.h2`
    color: ${colors.secondary};
`

function Footer() {
    return (
        <FooterContainer>
            <FooterLogo src={logoFooter} alt="Logo Kasa" />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterContainer>
    )
}

export default Footer