import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import styled from 'styled-components'
import colors from '../../style/colors'
import Error from '../../components/Error/index'
import Gallery from '../../components/Gallery/index'
import RatingStar from '../../components/RatingStar'
import Collapse from '../../components/Collapse'

const ContainerGallery = styled.div`
    margin-bottom: 30px;
`

const ContainerTitleHost = styled.div`
    display: flex;
    justify-content: space-between;
`

const ContainerTitleLocation = styled.div`
    color: ${colors.primary};
    margin-left: 50px;
`

const TextTitle = styled.h2`
    margin-bottom: 5px;
`

const TextLocation = styled.h4`
    margin-top: 0px;
`

const ContainerHost = styled.div`
    display: flex;
    margin: 0 50px;
`

const HostText = styled.h4`
    margin-right: 10px;
    text-align: right;
    color: ${colors.primary};
`

const HostPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50px;
    margin-left: 5px;
`

const ContainerTagRating = styled.div`
    display:flex;
    justify-content: space-between;
`

const ContainerTag = styled.div`
    margin: 20px 50px;
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
margin: 20px 50px 30px 50px;
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

    const textHost = location.host.name
    const hostArray = textHost.split(" ")

    return (
        <div>
            <ContainerGallery>
                <Gallery  pictures={location.pictures}/>
            </ContainerGallery>

            <ContainerTitleHost>
                <ContainerTitleLocation>
                    <TextTitle>{location.title}</TextTitle>
                    <TextLocation>{location.location}</TextLocation>
                </ContainerTitleLocation>
                <ContainerHost>
                    <HostText>{hostArray[0]}<br />{hostArray[1]}</HostText>
                    <HostPicture src={location.host.picture} alt="" />
                </ContainerHost>
            </ContainerTitleHost>

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