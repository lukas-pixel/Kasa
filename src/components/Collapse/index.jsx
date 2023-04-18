import "./Collapse.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Collapse({title, content}) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className={`ContainerCollapse ${open && "open"}`}>
                    <button className="CollapseBtn" type="button" onClick={handleClick}>
                        <div>{title}</div>
                        <div>
                        {open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </div>
                    </button>
                    <div className="ContainerContent">
                        {title === "Équipements" ? <ul>{content.map((item) => <li>{item}</li>)}</ul> : <p>{content}</p>}
                    </div>
                </div>
        </div>
    )
} 

export default Collapse