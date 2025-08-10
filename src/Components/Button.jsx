import React from 'react'

const Button = ({text, buttonStyles, func, className}) => {
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <button className={className} style={buttonStyles} onClick={func} >{text}</button>
        </div>
    )
}
export default Button
