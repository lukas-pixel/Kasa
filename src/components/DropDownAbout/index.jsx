import styled from "styled-components";
import colors from "../../style/colors";
import dataAbout from "../../data/About.json"

const ContainerDropDown = styled.div`
    width: auto;
    margin: 33px 209px 46px 209px;
    display: flex;
    flex-direction: column;
`

const DropBtn = styled.button`
    border-radius: 5px;
    font-size: 24px;
    margin: 10px 0 10px 0;
    padding: 6px 0 7px 18px;
    background-color: ${colors.primary};
    border: none;
    color: ${colors.White};
    text-align: start;
`

export default function DropDownAbout() {
    return (
        <ContainerDropDown>
            {dataAbout.map((about) => (
                <DropBtn>{about.title}</DropBtn>
            ))}
        </ContainerDropDown>
    )
}