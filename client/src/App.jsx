import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { useState } from 'react'
import { importWidget } from './widgets'



function App() {
  const [widgets, setWidgets] = useState([])
  const [loadedComponents, setLoadedComponents] = useState({});
  const [loading, setLoading] = useState({})

  const addWidgetHandler = async (e) => {
    const widgetName = e.target.value

    if (!loadedComponents[widgetName]) {
      setLoading(prev => ({ ...prev, [widgetName]: true }));
      
      try {
        const Component = await importWidget(widgetName);
        setLoadedComponents(prev => ({ ...prev, [widgetName]: Component }))
        setWidgets(prev => [...prev, widgetName])
      } catch (e) {
        console.error('Failed to load widget:', e)
      } finally {
        setLoading(prev => ({ ...prev, [widgetName]: false }))
      }
    } else {
      setWidgets(prev => [...prev, widgetName])
    }
  }

  const renderWidgetsHandler = (widgetName, index) => {
    const Component = loadedComponents[widgetName]
    const isLoading = loading[widgetName]

    if (isLoading) {
      return (
        <div className="widget loading-widget" key={index}>
          Loading {widgetName}...
        </div>
      )
    }

    if (Component) {
      return (
        <div className={`widget ${widgetName.toLowerCase()}`} key={index}>
          <Component/>
        </div>
      )
    }

    return null;
  }

  return (
    <div className="app">
      {widgets.map((widgetName, index) => renderWidgetsHandler(widgetName, index))}

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
