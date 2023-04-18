import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import Collapse from '../../components/Collapse'
import styled from 'styled-components'

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

    return (
        <div>
            <ContainerCollapse>
                <Collapse key={location.id} title="Description" content={location.description} />
                <Collapse key={location.id} title="Équipements" content={location.equipments} />
            </ContainerCollapse>
        </div>
    )
}

export default FicheLogement