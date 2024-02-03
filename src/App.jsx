import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './pages'

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='app'>
      <Router />
    </div>
  )
}

export default App
