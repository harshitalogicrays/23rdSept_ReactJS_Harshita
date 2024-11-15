import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routing from './Routing.jsx'
import { Provider } from 'react-redux'
import reduxstore from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={reduxstore}>
 <RouterProvider router={routing}/>
 </Provider>,
)
