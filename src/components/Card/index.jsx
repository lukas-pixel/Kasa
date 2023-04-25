import './Card.css'

function Card({id, cover, title}) {
    return (
        <figure key={id} style={{backgroundImage: `url(${cover})`}}>
            <h2 className='TextLocation'>{title}</h2>
        </figure>
    )
}

export default Card