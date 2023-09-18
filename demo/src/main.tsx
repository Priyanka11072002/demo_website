import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import {Provider} from 'react-redux'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {todoStore} from './store/todoStore.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={todoStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
