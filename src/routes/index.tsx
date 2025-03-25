import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';

// Lazy load do componente Detalhes
const Detalhes = lazy(() => import('../components/Detalhes'));

export default function AppRoutes() {
  return (
    <div>
      <Header />
      <div className='md:w-[1024px] md:m-auto'>
      <Suspense fallback={<div className="p-4 text-gray-700">Carregando página...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>
      </Suspense>
      </div>
    </div>
  );
}
