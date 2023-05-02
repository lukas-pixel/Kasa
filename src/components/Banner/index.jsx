import './Banner.css'

function Banner(props) {
    return (
        <div id='Banner'>
            <div className='Banner-Img'>
                <img src={props.Img} alt="" />
            </div>
            <h1 className='TextBanner'>{props.title}</h1>
        </div>
    )
}

export default Banner