import { useState } from 'react'
import './Slideshow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Slideshow({ pictures }) {
    //On donne une valeur initiale de 0 à notre variable d'état.
    const [pictureNumber, setPictureNumber] = useState(0)
    //Nombre total d'images
    const numberOfPictures = pictures.length

    function onClickLeft() {
        //On vérifie si l'index actuel de l'image est 0
        if (pictureNumber === 0) {
            // On met à jour l'index de l'image actuelle en le définissant sur le dernier index de la série
            setPictureNumber(numberOfPictures - 1)
        } else {
            //Sinon, la fonction décrémente l'index de l'image actuelle de 1
            setPictureNumber(pictureNumber - 1)
        }
    }

    function onClickRight() {
        //On vérifie si l'index acutel de l'image est égal ou supérieur au dernier index de la liste d'images
        if (pictureNumber >= numberOfPictures - 1) {
            //On met donc à jour l'index de l'image actuelle en le définissant sur 0 (le premier index de la liste)
            setPictureNumber(0)
        } else {
            //Sinon, la fonction incrémente l'index de l'image actuelle de 1
            setPictureNumber(pictureNumber + 1)
        }
    }

    return (
        <div className='Container-slideshow'>
            {pictures.map((index) => (
                <div key={index} className='picture-slideshow' style={{ backgroundImage: `url(${pictures[pictureNumber]})`}}></div>
            ))}
            {numberOfPictures > 1 && (
                <div className='nav-slideshow'>
                    <button onClick={onClickLeft} className='leftArrow' ><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button onClick={onClickRight} className='RightArrow' ><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            )}
            <div className='counter-slideshow'>
                {pictureNumber + 1} / {numberOfPictures}
            </div>
        </div>
    )
}

export default Slideshow