import React, {useState} from 'react'
import {FaTrash} from "react-icons/fa";

const ToDoList = () => {
    let [list, setList] = useState([]);
    let [item, setItem] = useState('')
    let input = document.querySelector('.toDoListInput')
    function doSomething() {
        setItem('')
        setList([...list, item])
        input.focus()
    }

    function setListItem(){
        item.trim() !== '' ? doSomething() : document.querySelector('.toDoListError').style.display = 'block'
    }

    function add (e){
        if(e.key === 'Enter'){
            setListItem()
        }
    }

    function removeTask(id){
        // list.
        setList(list.filter((item, itemId) => itemId !== id))
    }

    return (
    <>
           <div className="toDoList">
               <h1>To Do List</h1>
               <input className='toDoListInput' id='toDoListInput' type="text" value={item} onKeyDown={add} placeholder='Enter A Task e.g Take out the trash' onChange={(e)=>{setItem(e.target.value)}}/>
               {item === '' &&
                   <p className='toDoListError' style={{display:'none'}}>Enter a valid task</p>} <br/>
               <button className='addBtn' onClick={setListItem}>Add Task</button>
               {list.length !== 0 &&
                <ul className='lists'>
                    {list.map((item, key) => (
                        <div key={key}>

                            <li>{item}</li>
                            <FaTrash onClick={()=>{removeTask(key)}}/>
                        </div>
                       ))
                    }
               </ul>
               }
           </div>
        </>
    )
}
export default ToDoList
