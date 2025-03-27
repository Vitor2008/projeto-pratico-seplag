export async function buscarDesaparecidos() {
    try {
      const resposta = await fetch("https://abitus-api.geia.vip/v1/pessoas/aberto/filtro");
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

    console.log(url.toString());
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



// export async function buscarDesaparecidos() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: 1,
//           nome: "João Silva",
//           idade: 25,
//           sexo: "MASCULINO",
//           vivo: false,
//           urlFoto: "../../../public/img/1.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-03-10T14:00:00Z",
//             localDesaparecimentoConcat: "Centro - São Paulo, SP",
//           },
//         },
//         {
//           id: 2,
//           nome: "Maria Oliveira",
//           idade: 30,
//           sexo: "FEMININO",
//           vivo: true,
//           urlFoto: "../../../public/img/2.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-02-15T10:30:00Z",
//             localDesaparecimentoConcat: "Copacabana - Rio de Janeiro, RJ",
//           },
//         },
//         {
//           id: 3,
//           nome: "Carlos Mendes",
//           idade: 40,
//           sexo: "MASCULINO",
//           vivo: false,
//           urlFoto: "../../../public/img/3.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-01-20T08:45:00Z",
//             localDesaparecimentoConcat: "Centro - Belo Horizonte, MG",
//           },
//         },
//         {
//           id: 4,
//           nome: "Ana Souza",
//           idade: 22,
//           sexo: "FEMININO",
//           vivo: false,
//           urlFoto: "../../../public/img/4.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-03-05T20:00:00Z",
//             localDesaparecimentoConcat: "Jardins - São Paulo, SP",
//           },
//         },
//         {
//           id: 5,
//           nome: "Lucas Pereira",
//           idade: 28,
//           sexo: "MASCULINO",
//           vivo: true,
//           urlFoto: "../../../public/img/5.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-03-01T13:30:00Z",
//             localDesaparecimentoConcat: "Zona Norte - Rio de Janeiro, RJ",
//           },
//         },
//         {
//           id: 6,
//           nome: "Julia Costa",
//           idade: 19,
//           sexo: "FEMININO",
//           vivo: false,
//           urlFoto: "../../../public/img/6.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-02-10T15:00:00Z",
//             localDesaparecimentoConcat: "Itaim Bibi - São Paulo, SP",
//           },
//         },
//         {
//           id: 7,
//           nome: "Rafael Almeida",
//           idade: 35,
//           sexo: "MASCULINO",
//           vivo: true,
//           urlFoto: "../../../public/img/7.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-03-08T17:45:00Z",
//             localDesaparecimentoConcat: "Copacabana - Rio de Janeiro, RJ",
//           },
//         },
//         {
//           id: 8,
//           nome: "Fernanda Santos",
//           idade: 50,
//           sexo: "FEMININO",
//           vivo: false,
//           urlFoto: "../../../public/img/8.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-01-30T09:20:00Z",
//             localDesaparecimentoConcat: "Flamengo - Rio de Janeiro, RJ",
//           },
//         },
//         {
//           id: 9,
//           nome: "Carlos Roberto",
//           idade: 38,
//           sexo: "MASCULINO",
//           vivo: true,
//           urlFoto: "../../../public/img/9.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-02-22T18:40:00Z",
//             localDesaparecimentoConcat: "Santa Teresa - Rio de Janeiro, RJ",
//           },
//         },
//         {
//           id: 10,
//           nome: "Elisa Maria",
//           idade: 24,
//           sexo: "FEMININO",
//           vivo: true,
//           urlFoto: "../../../public/img/10.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-03-12T12:10:00Z",
//             localDesaparecimentoConcat: "Vila Mariana - São Paulo, SP",
//           },
//         },
//         {
//           id: 11,
//           nome: "Paulo Henrique",
//           idade: 33,
//           sexo: "MASCULINO",
//           vivo: false,
//           urlFoto: "../../../public/img/1.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-01-05T16:00:00Z",
//             localDesaparecimentoConcat: "Barra da Tijuca - Rio de Janeiro, RJ",
//           },
//         },
//         {
//           id: 12,
//           nome: "Adriana Gomes",
//           idade: 29,
//           sexo: "FEMININO",
//           vivo: false,
//           urlFoto: "../../../public/img/2.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-02-19T09:50:00Z",
//             localDesaparecimentoConcat: "Centro - Belo Horizonte, MG",
//           },
//         },
//         {
//           id: 13,
//           nome: "Felipe Costa",
//           idade: 27,
//           sexo: "MASCULINO",
//           vivo: true,
//           urlFoto: "../../../public/img/3.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-02-28T19:30:00Z",
//             localDesaparecimentoConcat: "Aeroporto - São Paulo, SP",
//           },
//         },
//         {
//           id: 14,
//           nome: "Cláudia Martins",
//           idade: 37,
//           sexo: "FEMININO",
//           vivo: true,
//           urlFoto: "../../../public/img/4.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-03-14T10:40:00Z",
//             localDesaparecimentoConcat: "Zona Sul - São Paulo, SP",
//           },
//         },
//         {
//           id: 15,
//           nome: "Bruna Alves",
//           idade: 32,
//           sexo: "FEMININO",
//           vivo: false,
//           urlFoto: "../../../public/img/5.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-03-15T20:00:00Z",
//             localDesaparecimentoConcat: "Niterói - Rio de Janeiro, RJ",
//           },
//         },
//         {
//           id: 16,
//           nome: "Thiago Silva",
//           idade: 41,
//           sexo: "MASCULINO",
//           vivo: true,
//           urlFoto: "../../../public/img/6.jpeg",
//           ultimaOcorrencia: {
//             dtDesaparecimento: "2025-03-16T08:30:00Z",
//             localDesaparecimentoConcat: "Ipanema - Rio de Janeiro, RJ",
//           },
//         },
//       ]);
//     }, 1000); // Simula um tempo de carregamento
//   });
// };

// export const buscarDetalheDesaparecido = async (id: number) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         id,
//         nome: "João da Silva",
//         idade: 30,
//         sexo: "MASCULINO",
//         vivo: false,
//         urlFoto: "../../../public/img/1.jpeg",
//         ultimaOcorrencia: {
//           dtDesaparecimento: "2024-03-10T15:00:00Z",
//           dataLocalizacao: null,
//           encontradoVivo: false,
//           localDesaparecimentoConcat: "Rua ABC, Centro, Cuiabá - MT",
//           ocoId: 6789,
//           listaCartaz: [
//             {
//               urlCartaz: "https://via.placeholder.com/600x800.png?text=Cartaz+Desaparecido",
//               tipoCartaz: "PDF_DESAPARECIDO",
//             },
//           ],
//         },
//       });
//     }, 1000); // Simula um atraso de 1 segundo
//   });
// };

