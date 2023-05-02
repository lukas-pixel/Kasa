import './About.css'
import Banner from "../../components/Banner"
import PaysageImg from "../../assets/kalen-emsley.png"
import Collapse from "../../components/Collapse/index"
import data from "../../data/About.json"

export default function Propos() {
    return (
        <div>
            <div className='ContainerAboutBanner'>
                <Banner Img={PaysageImg} />
            </div>
            <div className="ContainerAboutContenu">
                {data.map((about) => (
                    <Collapse key={about.id} title={about.title} content={about.description} />
                ))}
            </div>
        </div>
    )
}