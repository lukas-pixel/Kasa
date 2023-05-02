import './Banner.css'

function Banner(props) {
    return (
        <div id='Banner'>
            <div className='Banner-Img'>
                <img src={props.Img} alt="" />
            </div>
            <h1 className='TextBanner'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner