import styled from 'styled-components'
import colors from '../../style/colors'
import IMG from '../../assets/IMG.png'

const ContainerBanner = styled.div`
    background-image: url("${IMG}");
    height: 223px;
    border-radius: 25px;
    background-position: center;
    background-size: cover;
    text-align: center;
    margin-right: 50px;
    margin-left: 50px;
    Color: ${colors.White}
`

function Banner() {
    return (
        <ContainerBanner>
            <h1>Chez vous, partout et ailleurs</h1>
        </ContainerBanner>
    )
}

export default Banner