import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Welcome to react router tutorial!</h2>
  },
  {
    path: "about",
    element: <div>This is About page</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
