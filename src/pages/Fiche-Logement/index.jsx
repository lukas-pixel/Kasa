import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import styled from 'styled-components'
import colors from '../../style/colors'
import Error from '../../components/Error/index'
import RatingStar from '../../components/RatingStar'
import Collapse from '../../components/Collapse'

const ContainerTagRating = styled.div`
    display:flex;
    justify-content: space-between;
`

const ContainerTag = styled.div`
    margin: 0 50px;
`

const TextTag = styled.span`
    width: 115px;
    height: 25px;
    border-radius: 10px;
    border: 1px solid ${colors.primary};
    margin: 0 10px 0 0;
    padding: 2px 20px;
    text-align: center;
    font-size: 15px;
    background-color: ${colors.primary};
    color: ${colors.White};
`

const ContainerStar = styled.div`
margin: 0 50px;
`

const ContainerCollapse = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto; 
    gap: 0 70px;
    margin: 0 50px;
`

function FicheLogement() {

    const { id } = useParams()
    const location = data.find((loc) => loc.id === id)

    if (!data) {
        return <Error />
    }

    return (
        <div>
            <div>
                Carousel
            </div>

            <ContainerTagRating>
                <ContainerTag>
                    {location.tags.map((tag) => (
                        <TextTag key={tag}>{tag}</TextTag>
                    ))}
                </ContainerTag>
                <ContainerStar>
                    <RatingStar rating={location.rating}/>
                </ContainerStar>
            </ContainerTagRating>

            <ContainerCollapse>
                <Collapse key={location.id} title="Description" content={location.description} />
                <Collapse key={location.id} title="Équipements" content={location.equipments} />
            </ContainerCollapse>
        </div>
    )
}

export default FicheLogement