import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import MainLayout from './layouts/main.layouts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MainLayout><App /></MainLayout>} />
          <Route path="*" element={<MainLayout><App /></MainLayout>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
