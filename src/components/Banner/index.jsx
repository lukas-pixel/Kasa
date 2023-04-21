import styled from 'styled-components'
import colors from '../../style/colors'

const ContainerBanner = styled.div`
    position: relative;
    height: 223px;
    border-radius: 25px;
    background-position: center;
    background-size: cover;
    text-align: center;
`

const TextBanner = styled.h1`
    position: absolute;
    top: 30%;
    left: 30%;
    color: ${colors.White};
    text-align: center;
`

function Banner({imgPaysage}) {
    return (
        <ContainerBanner style={{backgroundImage: `url(${imgPaysage})`}}>
            <TextBanner>Chez vous, partout et ailleurs</TextBanner>
        </ContainerBanner>
    )
}

export default Banner