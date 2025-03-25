
import { useLocation } from "react-router-dom";

export default function Detalhes() {
  const location = useLocation();
  const detalhes = location.state?.detalhes;

  if (!detalhes) {
    return <div className="p-4 text-red-500">Nenhum detalhe encontrado.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{detalhes.nome}</h1>
      <img
        src={detalhes.urlFoto}
        alt={detalhes.nome}
        className="w-full max-w-md mx-auto rounded-lg shadow-md"
      />
      <p className="mt-4"><strong>Idade:</strong> {detalhes.idade} anos</p>
      <p><strong>Sexo:</strong> {detalhes.sexo}</p>
      <p className={`mt-2 font-semibold ${detalhes.vivo ? "text-green-600" : "text-red-600"}`}>
        {detalhes.vivo ? "Localizado Vivo" : "Ainda Desaparecido"}
      </p>
      <p><strong>Última ocorrência:</strong> {detalhes.ultimaOcorrencia.localDesaparecimentoConcat}</p>

      {detalhes.ultimaOcorrencia.listaCartaz.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Cartaz:</h2>
          <a
            href={detalhes.ultimaOcorrencia.listaCartaz[0].urlCartaz}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Ver Cartaz
          </a>
        </div>
      )}
    </div>
  );
}


