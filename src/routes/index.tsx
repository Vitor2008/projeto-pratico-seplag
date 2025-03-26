import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = lazy(() => import('../components/Home'));
const Detalhes = lazy(() => import('../components/Detalhes'));

export default function AppRoutes() {
  return (
    <div>
      <Header />
      <div className='md:w-[1024px] md:m-auto'>
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
           <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>
      </Suspense>
      </div>
      <Footer/>
    </div>
  );
}
