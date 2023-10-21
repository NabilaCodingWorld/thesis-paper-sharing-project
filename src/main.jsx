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

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ fontFamily: 'roboto' }}>
      <AuthProviders>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider><RouterProvider router={router} /></HelmetProvider>
        </QueryClientProvider>
      </AuthProviders>
    </div>
  </React.StrictMode>,
)
