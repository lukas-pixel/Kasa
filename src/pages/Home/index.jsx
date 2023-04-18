import styled from 'styled-components'
import colors from '../../style/colors'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/index'
import imgPaysage from '../../assets/IMG.png'
import Card from '../../components/Card/index'
import dataCard from '../../data/logements.json'

const ContainerBanner = styled.div`
    background-color: ${colors.Black};
    height: 223px;
    border-radius: 25px;
    margin: 0 50px 0 50px;
    Color: ${colors.White}
`

const ContainerGallery = styled.article`
    background-color: ${colors.secondary};
    border-radius: 25px;
    margin: 43px 50px 43px 50px;
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: auto;
    justify-content: center; 
` 

function Home() {

    return (
        <div>
            <ContainerBanner>
                <Banner imgPaysage={imgPaysage} />
            </ContainerBanner>
            <ContainerGallery>
                <Cards>
                    {dataCard.map((location) => (
                        <Link to={`/location/${location.id}`} key={location.id} style={{textDecoration: `none`}} >
                            <Card id={location.id} cover={location.cover} title={location.title}/>
                        </Link>
                    ))}
                </Cards>
            </ContainerGallery>            
        </div>
    )
}

export default Home