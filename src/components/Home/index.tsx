import { useState, useEffect } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "./public/img/1.jpeg",
    "./public/img/2.jpeg",
    "./public/img/3.jpeg",
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
        <h1 className="text-xl md:text-xl font-bold text-azul-7 mb-4">
          Busca Ativa por Desaparecidos
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
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <div
          className="w-full h-64 md:h-96 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${images[currentSlide]})` }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
