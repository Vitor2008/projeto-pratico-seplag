import { useLocation } from "react-router-dom";
import { useState } from "react";
import { formatarData } from "../../helper/formatarData";
import { Link } from "react-router-dom";
import { enviarInformacoes } from "../../services/api";

export default function Detalhes() {
  const location = useLocation();
  const detalhes = location.state?.detalhes;
  const dtDesaparecimento = formatarData(detalhes.ultimaOcorrencia.dtDesaparecimento);
  const dtLocalizacao = formatarData(detalhes.ultimaOcorrencia.dataLocalizacao);

  if (!detalhes) {
    return <div className="p-4 text-red-500">Nenhuma informação encontrada!</div>;
  }

  return (
    <>
      <Link to="/" className="pl-10 mt-8 flex cursor-pointer btn-voltar">
        <i className="fas fa-arrow-circle-left text-3xl text-azul-1 font-bold"></i>
        <h1 className="ml-2 uppercase text-azul-1 font-bold">Voltar</h1>
      </Link>
      <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-10">
        <div className="w-full md:w-1/2 md:text-left">
          <h1 className="text-lg md:text-xl font-bold text-white mb-4 bg-azul-1 p-1 uppercase">
            Detalhes do desaparecido
          </h1>
          <h1 className="text-2xl font-bold mb-1">{detalhes.nome}</h1>

          <h1 className="text-azul-1 font-semibold uppercase mt-4 mb-2"><strong>Última Ocorrência: </strong></h1>

          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
            <div>
              <label className="block"><strong>Status:</strong></label>
              <input type="text" className={`w-full text-sm rounded-md py-1 px-2 shadow-sm border border-gray-300 font-semibold uppercase ${detalhes.ultimaOcorrencia.dataLocalizacao === null ? "text-red-600" : "text-green-600"}`} value={detalhes.ultimaOcorrencia.dataLocalizacao === null ? "Desaparecido" : "Encontrado"} disabled />
            </div>
            <div>
              <label className="block"><strong>Idade:</strong></label>
              <input type="text" className="w-full text-sm rounded-md py-1 px-2 shadow-sm border border-gray-300" value={detalhes.idade} disabled />
            </div>
            <div>
              <label className="block"><strong>Sexo:</strong></label>
              <input type="text" className="w-full text-sm rounded-md py-1 px-2 shadow-sm border border-gray-300" value={detalhes.sexo} disabled />
            </div>
            <div>
              <label className="block"><strong>Data desaparecimento:</strong></label>
              <input type="text" className="w-full text-sm rounded-md py-1 px-2 shadow-sm border border-gray-300" value={dtDesaparecimento} disabled />
            </div>
          </div>

          <div className="mt-2">
           <label className="block"><strong>Local desaparecimento:</strong></label>
           <input type="text" className="w-full text-sm rounded-md py-1 px-2 shadow-sm border border-gray-300" value={detalhes.ultimaOcorrencia.localDesaparecimentoConcat} disabled />
          </div>
          
          {detalhes.ultimaOcorrencia.ocorrenciaEntrevDesapDTO != null && (
            <>
             <div>
                <div className="mt-2">
                  <label className="block"><strong>Vestimentas desaparecido:</strong></label>
                  <input type="text" className="w-full text-sm rounded-md py-1 px-2 shadow-sm border border-gray-300" value={detalhes.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido != null &&
                 detalhes.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido != "" ? detalhes.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido
                 : "Não informado"
                } disabled />
                </div>

                <div className="mt-2">
                  <label className="block"><strong>Últimas informações:</strong></label>
                  <textarea className="w-full text-sm rounded-md py-1 px-2 shadow-sm border border-gray-300" value={
                  detalhes.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao != null && 
                  detalhes.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao != "" ? detalhes.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao
                  : "Sem informações"
                } disabled />
                </div>

              </div>
            </>
          )}
      
          {detalhes.ultimaOcorrencia.dataLocalizacao != null && (
            <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-2">
              <div>
                <label className="block"><strong>Data localização:</strong></label>
                <input type="text" className="w-full text-sm rounded-md py-1 px-2 shadow-sm border border-gray-300 font-semibold uppercase" value={dtLocalizacao} disabled />
              </div>
              <div>
                <label className="block"><strong>Encontrado vivo:</strong></label>
                <input type="text" className="w-full text-sm rounded-md py-1 px-2 shadow-sm border border-gray-300" value={detalhes.ultimaOcorrencia.encontradoVivo ? "Sim" : "Não" } disabled />
              </div>
            </div>
          )}

          <div className="flex mt-5">
            {detalhes.ultimaOcorrencia.listaCartaz.length > 0 && (
              <a
                href={detalhes.ultimaOcorrencia.listaCartaz[0].urlCartaz}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer transition mr-2"
              >
                Ver Cartaz
            </a>
            )}

            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
              Enviar Informações
            </button>
          </div>

        </div>
        <div className="w-3/4 md:w-1/3 relative overflow-hidden">
          <div>
            <img
              src={detalhes.urlFoto === null ? 'https://th.bing.com/th/id/OIP.z4b-8zmm_IHANxApPVXCCQHaHa?rs=1&pid=ImgDetMain' : detalhes.urlFoto}
              alt={detalhes.nome}
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}




