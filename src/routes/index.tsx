import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Detalhes = lazy(() => import('../pages/Detalhes'))
const EnviarInformacoes = lazy(() => import('../pages/EnviarInformacoes'))

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/enviar/:id" element={<EnviarInformacoes />} />
      </Routes>
    </BrowserRouter>
  )
}
