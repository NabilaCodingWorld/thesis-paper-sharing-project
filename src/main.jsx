import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';
import AuthProviders from './Providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ fontFamily: 'roboto' }}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </div>
  </React.StrictMode>,
)
