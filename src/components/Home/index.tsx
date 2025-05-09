import { useState, useEffect } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "./public/img/cartaz1.jpg",
    "./public/img/cartaz2.jpg",
    "./public/img/cartaz3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-10">
      <div className="w-full md:w-1/2 md:text-left">
        <h1 className="text-lg md:text-xl font-bold text-white mb-4 bg-azul-1 p-1 uppercase">
          Busca Por Desaparecidos
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Conectamos pessoas e informações para localizar desaparecidos e reunir famílias. 
          Cada compartilhamento aumenta as chances de reencontro. Junte-se a essa missão e 
          contribua para trazer esperança a quem precisa.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Nosso compromisso é oferecer 
          dados confiáveis e facilitar o processo de busca. Conectamos pessoas e informações 
          para localizar desaparecidos e reunir famílias. Cada compartilhamento aumenta as 
          chances de reencontro. Junte-se a essa missão e contribua para trazer esperança.
        </p>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden p-2 bg-azul-1">
        <img
            src={images[currentSlide]}
            alt="Slide desaparecidos"
            className="w-full h-64 md:h-96 object-cover transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Home;
