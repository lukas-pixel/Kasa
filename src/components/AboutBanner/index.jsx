import styled from 'styled-components'
import colors from '../../style/colors'
import PaysageImg from '../../assets/kalen-emsley.png'

const ContainerImg = styled.div`
    height: 223px;
    background-image: url("${PaysageImg}");
    background-position: center;
    background-size: cover;
    background-color: ${colors.Black};
    border-radius: 25px;
    margin: 0 50px 0 50px;
`

function AboutBanner() {
    return (
        <ContainerImg></ContainerImg>
    )
}

export default AboutBanner