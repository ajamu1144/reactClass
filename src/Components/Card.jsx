import React from 'react'
import '../cssFiles/Cards.css'

const Card = ({heading, text}) => {
    return (
            <div className='card'>
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
    )
}
export default Card
