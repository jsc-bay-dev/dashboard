import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Clock from './widgets/Clock'
import Calculator from './widgets/Calculator'
import SoundCloud from './widgets/Soundcloud'

const importHandler = () => {
  return (
   <div className="widget"></div> 
  )
}

function App() {

  return (
    <div className="app">
      <Calculator/>
      <Clock/>
      <SoundCloud/>
      <div className="add_widgets">
        {/* bottom left of window. click for list. */}
      </div>
    </div>
  )
}

export default App
