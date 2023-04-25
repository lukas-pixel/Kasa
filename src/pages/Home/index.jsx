import './Home.css'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/index'
import imgPaysage from '../../assets/IMG.png'
import Card from '../../components/Card/index'
import dataCard from '../../data/logements.json'

function Home() {

    return (
        <div>
            <div className='ContainerBanner'>
                <Banner imgPaysage={imgPaysage} />
            </div>
            <article className='ContainerGallery'>
                <div className='Cards'>
                    {dataCard.map((location) => (
                        <Link to={`/location/${location.id}`} key={location.id} style={{textDecoration: `none`}} >
                            <Card id={location.id} cover={location.cover} title={location.title}/>
                        </Link>
                    ))}
                </div>
            </article>            
        </div>
    )
}

export default Home