import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-azul-7 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold">SEPLAG</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-azul-3 transition">Home</a>
          <a href="#" className="hover:text-azul-3 transition">Sobre</a>
          <a href="#" className="hover:text-azul-3 transition">Contato</a>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden focus:outline-none"
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

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden text-white border-t border-gray-200 px-4 py-2 space-y-2 text-azul-7">
          <a href="#" className="block hover:text-azul-3 transition">Home</a>
          <a href="#" className="block hover:text-azul-3 transition">Sobre</a>
          <a href="#" className="block hover:text-azul-3 transition">Contato</a>
        </nav>
      )}
    </header>

  )
}

export default Header
