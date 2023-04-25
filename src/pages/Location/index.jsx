import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import './Location.css'
import Error from '../../components/Error/index'
import Gallery from '../../components/Gallery/index'
import RatingStar from '../../components/RatingStar'
import Collapse from '../../components/Collapse'

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
            <div className='ContainerGallery'>
                <Gallery  pictures={location.pictures}/>
            </div>

            <div className='ContainerTitleHost'>
                <div className='ContainerTitleLocation'>
                    <h2 className='TextTitle'>{location.title}</h2>
                    <h4 className='TextLocation'>{location.location}</h4>
                </div>
                <div className='ContainerHostDesktop'>
                    <h4 className='HostText'>{hostArray[0]}<br />{hostArray[1]}</h4>
                    <img className='HostPicture' src={location.host.picture} alt="" />
                </div>
            </div>

            <div className='ContainerTagRating'>
                <div className='ContainerTag'>
                    {location.tags.map((tag) => (
                        <span className='TextTag' key={tag}>{tag}</span>
                    ))}
                </div>
                <div className='ContainerStarHostMobile'>
                    <div className='ContainerStar'>
                        <RatingStar rating={location.rating}/>
                    </div>
                    <div className='ContainerHostMobile'>
                        <h4 className='HostText'>{hostArray[0]}<br />{hostArray[1]}</h4>
                        <img className='HostPicture' src={location.host.picture} alt="" />
                    </div>
                </div>
            </div>

            <div className='ContainerContenu'>
                <Collapse key={location.id} title="Description" content={location.description} />
                <Collapse key={location.id} title="Équipements" content={location.equipments} />
            </div>
        </div>
    )
}

export default FicheLogement