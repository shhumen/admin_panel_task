import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './pages'
import { Toaster } from 'sonner'
import { useEffect } from 'react'

function App() {
  return (
    <div className='app'>
      <Toaster richColors position='top-left' expand={false} />
      <Router />
    </div>
  )
}

export default App
