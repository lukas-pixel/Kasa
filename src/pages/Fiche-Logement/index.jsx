import DropDown from '../../components/DropDown'
import data from '../../data/logements.json'
import { useParams } from 'react-router-dom'

function FicheLogement() {

    const { id } = useParams()
    const location = data.find((loc) => loc.id === id)

    return (
        <div>
            <DropDown key={location.id} description={location.description} equipements={location.equipments} />
        </div>
    )
}

export default FicheLogement