import "./Collapse.css"
import dataAbout from "../../data/About.json"
import fleche from "../../assets/Vector.png"
import { useState } from "react";

export default function DropDownAbout() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            {dataAbout.map((about) => (
                <div className={`ContainerDropDown ${open && "open"}`}>
                    <button className="DropBtn" type="button" onClick={handleClick}>
                        <div>{about.title}</div>
                        <div>
                            <img className="imgFleche" src={fleche} alt="Fleche" />
                        </div>
                    </button>
                    <div className="ContainerDescription">
                        <p>{about.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
} 