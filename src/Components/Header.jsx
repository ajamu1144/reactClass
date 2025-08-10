import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className='header'>
                <h2>Ajamu Emmanuel</h2>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/todo'>To Do List</Link>
                    </li>
                    <li>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li>Services</li>
                    <li>FAQ's</li>
                </ul>
            </div>
        </>
    )
}
export default Header
