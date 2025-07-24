import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Clock from './widgets/Clock'
import Calculator from './widgets/Calculator'
import SoundCloud from './widgets/Soundcloud'
import { useState } from 'react'

const addWidgetHandler = (e) => {
  e.preventDefault();
  setWidgets([...widgets, e.value]);
  console.log(`${e.value} added!`)
  console.log('widgets:', widgets)
}

function App() {
const [widgets, setWidgets] = useState([])

useEffect(() => {
  first

  return () => {
    second
  }
}, [widgets])


  return (
    <div className="app">
      
      
      <div className="add_widgets">
        <select onChange={addWidgetHandler} defaultValue="">
          <option value="" disabled>Select a widget</option>
          <option value="Clock">Clock</option>
          <option value="Calculator">Calculator</option>
          <option value="SoundCloud">SoundCloud</option>
        </select>
      </div>
    </div>
  )
}

export default App
