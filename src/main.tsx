import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import MainLayout from './layouts/main.layouts.tsx'
import ServicesPages from './pages/services.pages.tsx'
import AboutPages from './pages/about.pages.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><App /></MainLayout>} />
          <Route path="/About" element={<MainLayout><AboutPages /></MainLayout>} />
          <Route path="/Services" element={<MainLayout><ServicesPages /></MainLayout>} />
          <Route path="*" element={<MainLayout><App /></MainLayout>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
