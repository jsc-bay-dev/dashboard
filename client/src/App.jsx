import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Clock from './Widgets/Clock'

function App() {

  return (
    <div className="app">
      <Clock/>
      <div className="add_widgets">
        {/* bottom left of window. click for list. */}
      </div>
    </div>
  )
}

export default App
