import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '@/styles/main.scss'
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { CirclesWithBar, FallingLines } from 'react-loader-spinner'
import PreLoader from './shared/components/Preloader/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<PreLoader />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
