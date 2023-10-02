import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Posts from './components/Posts.jsx'
import PostDetails from './components/PostDetails.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts />
      },
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
