import React from "react"
import starFilled from '../../assets/star-filled.png'
import starEmpty from '../../assets/star-empty.png'

function RatingStar(rating) {
    const starArray = []

    for(let i=0; i < 5; i++) {
        if ( i < rating ) {
            starArray.push( <img src={starFilled} key="" alt="" /> )
        } else {
            starArray.push( <img src={starEmpty} key="" alt="" /> )
        }
    }

    return (
        <div>{starArray}</div>
    )
}

export default RatingStar