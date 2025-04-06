import { useLocation } from "react-router-dom";
import { formatarData } from "../../helper/formatarData";
import FotoPessoa  from '../../helper/FotoPessoa';
import { enviarInformacoes } from "../../services/api";
import { Link } from "react-router-dom";
import Swal, { SweetAlertResult } from "sweetalert2";

export default function Detalhes() {
  const location = useLocation();
  const filtros = location.state || {};
  const detalhes = location.state?.detalhes;
  const dtDesaparecimento = formatarData(detalhes.ultimaOcorrencia.dtDesaparecimento);
  const dtLocalizacao = formatarData(detalhes.ultimaOcorrencia.dataLocalizacao);

  const hoje = new Date().toISOString().split('T')[0];

  if (!detalhes) {
    return <div className="p-4 text-red-500">Nenhuma informação encontrada!</div>;
  }

  const abrirModal = () => {
    const modalContent = document.createElement("div");
    modalContent.innerHTML = `
      <div class="grid grid-cols-1 gap-4 text-left">
        <div>
          <label class="block font-medium text-gray-700"><strong>Informações:*</strong></label>
          <textarea id="campoInfo" class="swal2-textarea border rounded-md p-1 m-0" placeholder="Digite as informações aqui..."></textarea>
          <p id="erroInfo" class="text-red-500 text-sm hidden">Campo obrigatório!</p>
        </div>
        <div class="grid grid-cols-2">
          <div>
            <label class="block font-medium text-gray-700">Data informação:*</label>
            <input type="date" id="campoData" class="swal2-input w-full border rounded-md p-2 m-0 cursor-pointer" max=${hoje}>
            <p id="erroData" class="text-red-500 text-sm hidden">Campo obrigatório!</p>
          </div>
          <div>
            <label class="block font-medium text-gray-700">Enviar foto:</label>
            <input type="file" id="campoFoto" accept="image/png, image/jpeg, image/jpg" class="border rounded-md p-2 w-full cursor-pointer">
            <div id="previewContainer" class="mt-2 hidden">
              <img id="previewImage" class="max-w-full h-auto rounded-md shadow-md"/>
            </div>
          </div>
        </div>
      </div>
    `;
  
    Swal.fire({
      title: "Enviar informações:",
      showCancelButton: true,
      confirmButtonColor: "oklch(0.546 0.245 262.881)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Enviar",
      cancelButtonText: "Cancelar",
      html: modalContent,
      preConfirm: async () => {
        const info = document.getElementById("campoInfo") as HTMLTextAreaElement;
        const data = document.getElementById("campoData") as HTMLInputElement;
        const erroInfo = document.getElementById("erroInfo") as HTMLElement;
        const erroData = document.getElementById("erroData") as HTMLElement;
        const campoFoto = document.getElementById("campoFoto") as HTMLInputElement;
        
        let valid = true;
        let anexos: File[] = [];
  
        if (!info.value.trim()) {
          erroInfo.classList.remove("hidden");
          valid = false;
        } else {
          erroInfo.classList.add("hidden");
        }
  
        if (!data.value.trim()) {
          erroData.classList.remove("hidden");
          valid = false;
        } else {
          erroData.classList.add("hidden");
        }
  
        if (campoFoto.files && campoFoto.files.length > 0) {
          anexos = Array.from(campoFoto.files); 
        }
  
        if (!valid) return false;
  
        const dados = {
          informacao: info.value.trim(),
          data: data.value.trim(),
          ocoId: detalhes.ultimaOcorrencia.ocoId,
          id: detalhes.id,
          anexos: anexos,
        };
  
        const result = await enviarInformacoes(dados);
  
        if (!result || result.erro) {
          Swal.fire({
            title: "Erro ao enviar informações!",
            text: result?.erro || "Ocorreu um erro desconhecido.",
            icon: "error",
            confirmButtonText: "Ok",
          });
          return false;
        }
  
        return true;
      }
    }).then((result: SweetAlertResult) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Informações Enviadas!",
          confirmButtonColor: "oklch(0.546 0.245 262.881)",
          icon: "success"
        });
      }
    });
  };  
  
  return (
    <>
      <Link to="/" state={filtros} className="pl-10 mt-8 flex cursor-pointer btn-voltar">
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

          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-2">
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

            <button onClick={abrirModal} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
              Enviar Informações
            </button>
          </div>

        </div>
        <div className="w-3/4 md:w-1/3 relative overflow-hidden">
          <div>
            <FotoPessoa 
              url={detalhes.urlFoto}
              alt={detalhes.nome}
              className="w-full object-cover rounded-md mb-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}




