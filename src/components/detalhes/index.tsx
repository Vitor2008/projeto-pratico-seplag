
import { useLocation } from "react-router-dom";

export default function Detalhes() {
  const location = useLocation();
  const detalhes = location.state?.detalhes;

  const dtDesaparecimento = detalhes.ultimaOcorrencia.dtDesaparecimento;
  console.log(dtDesaparecimento);
  const data = new Date(dtDesaparecimento);
  var dataFormatada = "";
  
  if (!isNaN(data.getTime())) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = data.getFullYear();
    dataFormatada = `${dia}/${mes}/${ano}`;
  } else {
    console.error("Data inválida");
  }


  if (!detalhes) {
    return <div className="p-4 text-red-500">Nenhuma informação encontrada!</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-10">
      <div className="w-full md:w-1/2 md:text-left">
        <h1 className="text-3xl font-bold mb-4">{detalhes.nome}</h1>
        <p className="mt-4"><strong>Idade:</strong> {detalhes.idade} anos</p>
        <p><strong>Sexo:</strong> {detalhes.sexo}</p>
        <p className={`font-semibold ${detalhes.vivo ? "text-green-600" : "text-red-600"}`}>
          {detalhes.vivo ? "Localizado Vivo" : "Ainda Desaparecido"}
        </p>
        <p><strong>Data desaparecimento:</strong> {dataFormatada}</p>
        <p><strong>Data localização:</strong> {detalhes.ultimaOcorrencia.dataLocalizacao}</p>
        <p><strong>Encontrato vivo:</strong> {detalhes.ultimaOcorrencia.encontradoVivo}</p>
        <p><strong>Local desaparecimento:</strong> {detalhes.ultimaOcorrencia.localDesaparecimentoConcat}</p>

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
      <div className="w-3/4 md:w-1/3 relative overflow-hidden">
        <div>
          <img
            src={detalhes.urlFoto == null ? 'https://th.bing.com/th/id/OIP.z4b-8zmm_IHANxApPVXCCQHaHa?rs=1&pid=ImgDetMain' : detalhes.urlFoto}
            alt={detalhes.nome}
            className="w-full max-w-md mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}


