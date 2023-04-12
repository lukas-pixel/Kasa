import styled from 'styled-components'
import colors from '../../style/colors'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/index'
import Card from '../../components/Card/index'
import dataCard from '../../data/logements.json'

const ContainerGallery = styled.article`
    background-color: ${colors.secondary};
    border-radius: 25px;
    margin: 43px 50px 43px 50px;
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
` 

function Home() {

    return (
        <div>
            <Banner />
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