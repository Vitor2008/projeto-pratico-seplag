import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="shadow-md sticky top-0 z-50 bg-azul-7">
      <div className='flex p-4 items-center px-20 inner-header text-white'>
        <img className='w-60 rounded-full' src='https://seplag.mt.gov.br/img/LOGO%20SEPLAG%20-%20BRANCO%20(T)%20VAZADO.png'/>
      </div>
      {/* Barra de Navegação */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 bg-cinza">
          <div className='inner-header'>
              {/* Menu Desktop */}
            <nav className="hidden lg:flex p-4">
              <Link to="/" className="text-azul-1 hover-btn transition uppercase border-r-2 pl-4 pr-4 text-sm">Página Inicial</Link>
              <Link to="/" className="text-azul-1 hover-btn transition uppercase border-r-2 pl-4 pr-4 text-sm">Institucional</Link>
              <Link to="/" className="text-azul-1 hover-btn transition uppercase border-r-2 pl-4 pr-4 text-sm">Sobre</Link>
              <Link to="/" className="text-azul-1 hover-btn transition uppercase border-r-2 pl-4 pr-4 text-sm">Serviços</Link>
              <Link to="/" className="text-azul-1 hover-btn transition uppercase border-r-2 pl-4 pr-4 text-sm">Dúvidas</Link>
              <Link to="/" className="text-azul-1 hover-btn transition uppercase border-r-2 pl-4 pr-4 text-sm">Ouvidoria</Link>
              <Link to="/" className="text-azul-1 hover-btn transition uppercase border-r-2 pl-4 pr-4 text-sm">Contato</Link>
            </nav>

            {/* Botão Menu Mobile */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-[50px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top 
            ${menuOpen ? 'scale-y-100 opacity-100 max-h-96' : 'scale-y-0 opacity-0 max-h-0'}
            bg-azul-4 text-white border-t border-gray-200 px-4 py-2 space-y-2`}
          >
          <Link to="/" className="block hover-btn-secundario transition uppercase border-b-1">Página Inicial</Link>
          <Link to="/" className="block hover-btn-secundario transition uppercase border-b-1">Institucional</Link>
          <Link to="/" className="block hover-btn-secundario transition uppercase border-b-1">Sobre</Link>
          <Link to="/" className="block hover-btn-secundario transition uppercase border-b-1">Serviços</Link>
          <Link to="/" className="block hover-btn-secundario transition uppercase border-b-1">Dúvidas</Link>
          <Link to="/" className="block hover-btn-secundario transition uppercase border-b-1">Ouvidoria</Link>
          <Link to="/" className="block hover-btn-secundario transition uppercase border-b-1">Contato</Link>
        </nav>
    </header>

  )
}

export default Header
