import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './routes/AuthProvider.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';

/* useEffect(() => {
  window.scrollTo(0, 0)
}, []) */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
