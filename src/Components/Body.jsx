import React from 'react'
import States from './States.jsx'
import Card from "./Card.jsx"
import logo from '../assets/react.svg'
import ToDoList from "./ToDoList.jsx";

const Body = () => {
    return (
        <>

            <div className='bodyDiv'>
                <h1>Become a <img src={logo} alt=""/> Developer in less than 3 months</h1><br/>
                <p>Find the React job the fits your skill set</p>
            </div>
                <Card heading={'For Developer'} text={'Browse our React jobs and start your career today'}/>
                <Card heading={'For Employers'} text={'Browse our React Jobs and start your career today'}/>
            <States/>
        </>
    )
}
export default Body
