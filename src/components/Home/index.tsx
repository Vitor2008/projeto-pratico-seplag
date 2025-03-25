
// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const navigate = useNavigate(); // Hook para navegação

//   function handleSalvar() {
//     const id = 123; // ou o ID real da pessoa, vindo de API ou input
//     navigate(`/detalhes/${id}`);
//   }

//   return (
//     <div>
//       <header>Projeto teste</header>
//       <button onClick={handleSalvar} type="button">Salvar</button>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { buscarDesaparecidos } from "../../services/api";

interface Desaparecido {
  id: string;
  nome: string;
  idade: number;
  urlFoto: string;
  vivo: boolean;
  ultimaOcorrencia: {
    localDesaparecimentoConcat: string;
  };
}

export default function Home() {
  const [desaparecidos, setDesaparecidos] = useState<Desaparecido[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itensPorPagina] = useState(10);

  useEffect(() => {
    const obterDesaparecidos = async () => {
      const dados = await buscarDesaparecidos();
      setDesaparecidos(dados);
    };
    obterDesaparecidos();
  }, []);

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const desaparecidosPaginados = desaparecidos.slice(indicePrimeiroItem, indiceUltimoItem);

  const totalPaginas = Math.ceil(desaparecidos.length / itensPorPagina);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pessoas Desaparecidas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {desaparecidosPaginados.map((desaparecido) => (
          <div key={desaparecido.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={desaparecido.urlFoto}
              alt={desaparecido.nome}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{desaparecido.nome}</h2>
            <p>{desaparecido.idade} anos</p>
            <p className={`mt-2 font-semibold ${desaparecido.vivo ? "text-green-600" : "text-red-600"}`}>
                     {desaparecido.vivo ? "Localizado Vivo" : "Ainda Desaparecido"}
            </p>
            <p>{desaparecido.ultimaOcorrencia.localDesaparecimentoConcat}</p>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-l-md"
          disabled={paginaAtual === 1}
          onClick={() => setPaginaAtual(paginaAtual - 1)}
        >
          Anterior
        </button>
        <span className="px-4 py-2 text-lg font-semibold">{paginaAtual}</span>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md"
          disabled={paginaAtual === totalPaginas}
          onClick={() => setPaginaAtual(paginaAtual + 1)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
