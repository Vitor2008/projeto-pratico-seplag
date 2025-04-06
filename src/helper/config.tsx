
const API_BASE = 'https://abitus-api.geia.vip/v1';

const config = {
  api: {
    buscarDesaparecidos: `${API_BASE}/pessoas/aberto`,
    buscarDetalheDesaparecido: `${API_BASE}/pessoas`, 
    buscarDesaparecidosComFiltro: `${API_BASE}/pessoas/aberto/filtro`,
    enviarInformacoes: `${API_BASE}/ocorrencias/informacoes-desaparecido`
  },
};

export default config;
