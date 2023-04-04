import styled from 'styled-components'
import colors from '../../style/colors'
import data from '../../data/logements.json'
import { Link } from 'react-router-dom'

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

const Figure = styled.figure`
    height: 340px;
    width: 340px;
    border-radius: 10px;
    margin: 28px 25px 22px 25px;
    background-position: center;
    display: flex;
    align-items: flex-end;
`

const TextLocation = styled.h2`
    z-index: 1;
    padding: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: ${colors.White};
`

function Card() {
    return (
        <ContainerGallery>
            <Cards>
                {data.map((location) => (
                    <Link to={`/location/${location.id}`} key={location.id} style={{textDecoration: `none`}} >
                        <Figure key={location.id} style={{backgroundImage: `url(${location.cover})`}}>
                            <TextLocation>{location.title}</TextLocation>
                        </Figure>
                    </Link>
                ))} 
            </Cards>
        </ContainerGallery>
    )
}

export default Card