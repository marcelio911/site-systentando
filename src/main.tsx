import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

// styles
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/paper-kit.scss?v=1.3.0';
import 'assets/demo/demo.css?v=1.3.0';
// pages
import NucleoIcons from './views/NucleoIcons';
import LandingPage from './views/examples/LandingPage';
import ProfilePage from './views/examples/ProfilePage';
import RegisterPage from './views/examples/RegisterPage';
import Home from './pages/home';
// others
import { ThemeProvider } from "@/components/theme-provider"

import './utils/firebase/firebase.utils';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path='/index' element={<Home />} />
          <Route path='/nucleo-icons' element={<NucleoIcons />} />
          <Route path='/landing-page' element={<LandingPage />} />
          <Route path='/profile-page' element={<ProfilePage />} />
          <Route path='/register-page' element={<RegisterPage />} />
          <Route path='*' element={<Navigate to='/index' replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)

