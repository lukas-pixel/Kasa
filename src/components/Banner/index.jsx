import styled from 'styled-components'
import colors from '../../style/colors'
import IMG from '../../assets/IMG.png'

const ContainerBanner = styled.div`
    background-image: url("${IMG}");
    height: 223px;
    border-radius: 25px;
`
const ContainerBannerText = styled.div`

`

const BannerText = styled.h1`
    Color: ${colors.primary}
`

function Banner() {
    return (
        <ContainerBanner>
            <ContainerBannerText>
                <BannerText>Chez vous, partout et ailleurs</BannerText>
            </ContainerBannerText>
        </ContainerBanner>
    )
}

export default Banner