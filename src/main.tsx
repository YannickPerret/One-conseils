import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/main.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assurances from './pages/Assurance/Assurance';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/assurance",
    element: <Assurances />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
