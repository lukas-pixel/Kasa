import AboutBanner from "../../components/AboutBanner"
import Collapse from "../../components/Collapse/index"
import data from "../../data/About.json"

export default function Propos() {
    return (
        <div>
            <AboutBanner />
            {data.map((about) => (
                <Collapse key={about.id} title={about.title} description={about.description} />
            ))}
        </div>
    )
}