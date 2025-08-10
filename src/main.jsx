import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const name= window.prompt('Enter your name')
// console.log(name)
function render(){
    createRoot(document.getElementById('root')).render(
      <StrictMode>
            <App />
      </StrictMode>
    )
}
render()
// {name.trim() !== '' ? render() : null}
