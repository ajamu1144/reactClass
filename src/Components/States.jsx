import React, {useState} from 'react'
import Card from './Cards.jsx'


const States = () => {
    let [isShown, setShown] = useState(false)
    let [CurrentButtonTextState, setCurrentButtonTextState] = useState('Read More ')
    let [elipseTextState, setElispeTextState] = useState(false)
    const RealText = 'Did you know, there is a wonderful place to learn all sorts of computer skills for such an affordable price?'
    let currentText = `${RealText} ${!elipseTextState ? '...' : ''}`
    function setShownFunc(){
        setShown(!isShown)
        setElispeTextState(!elipseTextState)
        setCurrentButtonTextState(isShown ? 'Read More' : 'Read Less')
    }

    return (
        <>
            <Card isShown={isShown} func={setShownFunc} currentText={CurrentButtonTextState} text={currentText}/>
        </>
    )
}
export default States