import React from 'react'

const Cards = ({isShown, func, currentText, text}) => {
    const remainingText = 'This place is called ValueMax. Valuemax is an affordable and reliable centre where students can learn, ask questions and so many more'
    return (
        <>
            <div>
                <h2>
                    {text}
                    {isShown ? remainingText : ''}
                </h2>
            </div><br/>
            <button onClick={func}>{currentText}</button>
        </>
    )
}
export default Cards
