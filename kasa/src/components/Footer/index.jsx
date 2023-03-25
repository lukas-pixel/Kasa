import styled from 'styled-components'
import logoFooter from "../../assets/LogoFooter.png"
import colors from '../../style/colors'

const FooterColor = styled.div`
    background-color: ${colors.tertiary};
    display: flex;
    align-content: center;
    justify-content: center;
`

const FooterImg = styled.img`
    height: 40px;
`

const FooterText = styled.h2`
    color: ${colors.secondary};
`

function Footer() {
    return (
        <FooterColor>
            <FooterImg src={logoFooter} alt="logo Kasa" />
            <FooterText><br />© 2020 Kasa. All rights reserved</FooterText>
        </FooterColor>
    )
}

export default Footer