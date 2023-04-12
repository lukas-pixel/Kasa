import "./Collapse.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Collapse({title, description}) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className={`ContainerDropDown ${open && "open"}`}>
                    <button className="DropBtn" type="button" onClick={handleClick}>
                        <div>{title}</div>
                        <div>
                        {open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </div>
                    </button>
                    <div className="ContainerDescription">
                        <p>{description}</p>
                    </div>
                </div>
        </div>
    )
} 

export default Collapse