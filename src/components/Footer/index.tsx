const Footer = () => {
    return (
      <footer className="bg-azul-7 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Coluna 1: Informações */}
            <div>
              <h2 className="text-lg font-bold mb-2">Sobre</h2>
              <p className="text-sm">
                Plataforma dedicada a ajudar na busca por pessoas desaparecidas no estado de Mato Grosso.
              </p>
            </div>
  
            {/* Coluna 2: Links Rápidos */}
            <div>
              <h2 className="text-lg font-bold mb-2">Links Rápidos</h2>
              <ul className="text-sm space-y-2">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/sobre" className="hover:underline">Sobre</a></li>
                <li><a href="/contato" className="hover:underline">Contato</a></li>
              </ul>
            </div>
  
            {/* Coluna 3: Redes Sociais */}
            <div>
              <h2 className="text-lg font-bold mb-2">Redes Sociais</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400 transition">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="hover:text-gray-400 transition">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="hover:text-gray-400 transition">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Linha divisória */}
          <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
            <p>&copy; 2025 Vitor ALmeida. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
