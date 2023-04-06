import styled from 'styled-components'
import colors from '../../style/colors'
import PaysageImg from '../../assets/kalen-emsley.png'

const ContainerImg = styled.div`
    height: 223px;
    background-color: ${colors.Black};
    border-radius: 25px;
    margin: 0 50px 0 50px;
`

const AboutImg = styled.div`
    height: 223px;
    background-image: url("${PaysageImg}");
    background-position: center;
    background-size: cover;
    border-radius: 25px;
    opacity: 0.6;
`

function AboutBanner() {
    return (
        <ContainerImg>
            <AboutImg></AboutImg>
        </ContainerImg>
    )
}

export default AboutBanner