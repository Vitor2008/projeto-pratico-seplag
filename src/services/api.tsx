import config from '../helper/config';


export async function buscarDesaparecidos() {
    try {
      const resposta = await fetch(`${config.api.buscarDesaparecidos}`);
      if (!resposta.ok) {
        throw new Error("Erro ao buscar dados da API");
      }
      const dados = await resposta.json();
      return dados.content; 
    } catch (erro) {
      console.error("Erro ao buscar desaparecidos:", erro);
      return []; 
    }
};

export const buscarDetalheDesaparecido = async (id: number) => {
  try {
    const response = await fetch(`${config.api.buscarDetalheDesaparecido}/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar detalhes");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar detalhes:", error);
    throw error;
  }
};

export async function buscarDesaparecidosComFiltro(filtros: { 
  nome?: string; 
  faixaIdadeInicial?: number; 
  faixaIdadeFinal?: number; 
  sexo?: "MASCULINO" | "FEMININO"; 
  status?: "DESAPARECIDO" | "LOCALIZADO"; 
  pagina?: number; 
  porPagina?: number; 
}) {
  try {
    const url = new URL(`${config.api.buscarDesaparecidosComFiltro}`);

    Object.entries(filtros).forEach(([chave, valor]) => {
      if (valor !== undefined && valor !== null) {
        url.searchParams.append(chave, valor.toString());
      }
    });

    const resposta = await fetch(url.toString());

    if (!resposta.ok) {
      throw new Error("Erro ao buscar dados da API");
    }

    const dados = await resposta.json();
    return dados.content; 
  } catch (erro) {
    console.error("Erro ao buscar desaparecidos com filtros:", erro);
    return [];
  }
};

export const enviarInformacoes = async (dados: {
  informacao: string;
  data: string;
  ocoId: number;
  id: number;
  anexos?: File[]; 
}) => {
  try {
    const { anexos } = dados;

    const formData = new FormData();

    for (const [key, value] of Object.entries(dados)) {
      formData.append(key, value as string);
    }

    if (anexos && anexos.length > 0) {
      anexos.forEach((anexo, index) => {
        formData.append(`anexos[${index}]`, anexo); 
      });
    }

    const response = await fetch(`${config.api.enviarInformacoes}`, {
      method: "POST",
      headers: {
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao enviar informações: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar informações do desaparecido:", error);
    return null;
  }
};



