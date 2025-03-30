export async function buscarDesaparecidos() {
    try {
      const resposta = await fetch("https://abitus-api.geia.vip/v1/pessoas/aberto");
      if (!resposta.ok) {
        throw new Error("Erro ao buscar dados da API");
      }
      const dados = await resposta.json();
      return dados.content; 
    } catch (erro) {
      console.error("Erro ao buscar desaparecidos:", erro);
      return []; 
    }
  }

export const buscarDetalheDesaparecido = async (id: number) => {
  try {
    const response = await fetch(`https://abitus-api.geia.vip/v1/pessoas/${id}`);
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
    const url = new URL("https://abitus-api.geia.vip/v1/pessoas/aberto/filtro");

    // Adiciona os filtros se existirem
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

export async function enviarInformacoes(dados) {
  try {
    const response = await fetch("https://abitus-api.geia.vip/v1/ocorrencias/informacoes-desaparecido", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar informações: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar informações do desaparecido:", error);
    return null;
  }
};
