import './Banner.css'

function Banner({imgPaysage}) {
    return (
        <div className='ContainerBanner' style={{backgroundImage: `url(${imgPaysage})`}}>
            <h1 className='TextBanner'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner