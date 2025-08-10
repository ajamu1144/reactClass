import React from 'react'
import './App.css'
import Body from "./Components/Body.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Header from "./Components/Header.jsx";
import ToDoList from "./Components/ToDoList.jsx";
import Shop from "./Components/Shop.jsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route element={<Layout/>}>
                    <Route index element={<Body/>}/>
                    <Route path='/todo' element={<ToDoList/>}/>
                    <Route path='/shop' element={<Shop/>}/>
              </Route>
          </Routes>
      </Router>
  )
}

export default App
