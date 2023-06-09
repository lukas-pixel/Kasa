import React from "react"
import starFilled from '../../assets/star-filled.png'
import starEmpty from '../../assets/star-empty.png'

function RatingStar(data) {
    const starArray = []
    for(let i=0; i < 5; i++) {
        if ( i < data.rating ) {
            starArray.push( <img src={starFilled} key={i} alt="starFilled" /> )
        } else {
            starArray.push( <img src={starEmpty} key={i} alt="starEmpty" /> )
        }
    }

    return (
        <div>{starArray}</div>
    )
}

export default RatingStar