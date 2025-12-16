import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Servicios from './pages/Servicios.jsx'
import Exposicion from './pages/Exposicion.jsx'
import Artistas from './pages/Artistas.jsx'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,      // <-- esto hace que Home sea la ruta por defecto en '/'
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/artistas',
        element: <Artistas />,
      },
      {
        path: '/exposicion',
        element: <Exposicion />,
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      // {
      //   path: '/servicios',
      //   element: <Servicios />,
      // },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)