import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <p>Initial App.jsx</p>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
