import './AboutBanner.css'
import PaysageImg from '../../assets/kalen-emsley.png'

function AboutBanner() {
    return (
        <div className='ContainerImg'>
            <div className='AboutImg' style={{ backgroundImage: `url("${PaysageImg}")`}}></div>
        </div>
    )
}

export default AboutBanner