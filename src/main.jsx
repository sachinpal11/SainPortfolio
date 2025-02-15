import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Home from './routes/Home.jsx'
import { RouterProvider } from 'react-router'
import About from './routes/About.jsx'


const router = createBrowserRouter([{
  path: "/", element: <App />, children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
