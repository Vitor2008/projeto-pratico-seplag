import { Suspense } from 'react'
import AppRoutes from './routes'

export default function App() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Carregando...</div>}>
      <AppRoutes />
    </Suspense>
  )
}
