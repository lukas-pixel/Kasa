import styled from 'styled-components'
import colors from '../../style/colors'

const Figure = styled.figure`
    height: 340px;
    width: 340px;
    border-radius: 10px;
    margin: 28px 25px 22px 25px;
    background-position: center;
    display: flex;
    align-items: flex-end;
`

const TextLocation = styled.h2`
    z-index: 1;
    padding: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: ${colors.White};
`

function Card({id, cover, title}) {
    return (
        <Figure key={id} style={{backgroundImage: `url(${cover})`}}>
            <TextLocation>{title}</TextLocation>
        </Figure>
    )
}

export default Card