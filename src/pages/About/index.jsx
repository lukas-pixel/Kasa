import './About.css'
import Collapse from "../../components/Collapse/index"
import data from "../../data/About.json"

export default function Propos() {
    return (
        <div>
            <div className="ContainerAboutContenu">
                {data.map((about) => (
                    <Collapse key={about.id} title={about.title} content={about.description} />
                ))}
            </div>
        </div>
    )
}