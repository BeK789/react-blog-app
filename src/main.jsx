import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import SingleBlog from './pages/SingleBlog.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path: "/",
      element: <Home/>
    },
    {
      path: "/blogs",
      element: <Blogs/>    
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/services",
      element: <Services/>
    },
    {
      path: "/blogs/:id",
      element: <SingleBlog/>,
      loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
