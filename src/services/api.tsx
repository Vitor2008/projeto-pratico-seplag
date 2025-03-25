// export async function buscarDesaparecidos() {
//     try {
//       const resposta = await fetch("URL_DA_API_AQUI");
//       if (!resposta.ok) {
//         throw new Error("Erro ao buscar dados da API");
//       }
//       const dados = await resposta.json();
//       return dados.content; // Retornando apenas a lista de desaparecidos
//     } catch (erro) {
//       console.error("Erro ao buscar desaparecidos:", erro);
//       return []; // Retorna um array vazio em caso de erro
//     }
//   }


export async function buscarDesaparecidos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nome: "João Silva",
          idade: 25,
          sexo: "MASCULINO",
          vivo: false,
          urlFoto: "../../../public/1.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-10T14:00:00Z",
            localDesaparecimentoConcat: "Centro - São Paulo, SP",
          },
        },
        {
          id: 2,
          nome: "Maria Oliveira",
          idade: 30,
          sexo: "FEMININO",
          vivo: true,
          urlFoto: "../../../public/2.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-02-15T10:30:00Z",
            localDesaparecimentoConcat: "Copacabana - Rio de Janeiro, RJ",
          },
        },
        {
          id: 3,
          nome: "Carlos Mendes",
          idade: 40,
          sexo: "MASCULINO",
          vivo: false,
          urlFoto: "../../../public/3.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-01-20T08:45:00Z",
            localDesaparecimentoConcat: "Centro - Belo Horizonte, MG",
          },
        },
        {
          id: 4,
          nome: "Ana Souza",
          idade: 22,
          sexo: "FEMININO",
          vivo: false,
          urlFoto: "../../../public/4.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-05T20:00:00Z",
            localDesaparecimentoConcat: "Jardins - São Paulo, SP",
          },
        },
        {
          id: 5,
          nome: "Lucas Pereira",
          idade: 28,
          sexo: "MASCULINO",
          vivo: true,
          urlFoto: "../../../public/5.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-01T13:30:00Z",
            localDesaparecimentoConcat: "Zona Norte - Rio de Janeiro, RJ",
          },
        },
        {
          id: 6,
          nome: "Julia Costa",
          idade: 19,
          sexo: "FEMININO",
          vivo: false,
          urlFoto: "../../../public/6.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-02-10T15:00:00Z",
            localDesaparecimentoConcat: "Itaim Bibi - São Paulo, SP",
          },
        },
        {
          id: 7,
          nome: "Rafael Almeida",
          idade: 35,
          sexo: "MASCULINO",
          vivo: true,
          urlFoto: "../../../public/7.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-08T17:45:00Z",
            localDesaparecimentoConcat: "Copacabana - Rio de Janeiro, RJ",
          },
        },
        {
          id: 8,
          nome: "Fernanda Santos",
          idade: 50,
          sexo: "FEMININO",
          vivo: false,
          urlFoto: "../../../public/8.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-01-30T09:20:00Z",
            localDesaparecimentoConcat: "Flamengo - Rio de Janeiro, RJ",
          },
        },
        {
          id: 9,
          nome: "Carlos Roberto",
          idade: 38,
          sexo: "MASCULINO",
          vivo: true,
          urlFoto: "../../../public/9.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-02-22T18:40:00Z",
            localDesaparecimentoConcat: "Santa Teresa - Rio de Janeiro, RJ",
          },
        },
        {
          id: 10,
          nome: "Elisa Maria",
          idade: 24,
          sexo: "FEMININO",
          vivo: true,
          urlFoto: "../../../public/10.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-12T12:10:00Z",
            localDesaparecimentoConcat: "Vila Mariana - São Paulo, SP",
          },
        },
        {
          id: 11,
          nome: "Paulo Henrique",
          idade: 33,
          sexo: "MASCULINO",
          vivo: false,
          urlFoto: "../../../public/1.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-01-05T16:00:00Z",
            localDesaparecimentoConcat: "Barra da Tijuca - Rio de Janeiro, RJ",
          },
        },
        {
          id: 12,
          nome: "Adriana Gomes",
          idade: 29,
          sexo: "FEMININO",
          vivo: false,
          urlFoto: "../../../public/2.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-02-19T09:50:00Z",
            localDesaparecimentoConcat: "Centro - Belo Horizonte, MG",
          },
        },
        {
          id: 13,
          nome: "Felipe Costa",
          idade: 27,
          sexo: "MASCULINO",
          vivo: true,
          urlFoto: "../../../public/3.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-02-28T19:30:00Z",
            localDesaparecimentoConcat: "Aeroporto - São Paulo, SP",
          },
        },
        {
          id: 14,
          nome: "Cláudia Martins",
          idade: 37,
          sexo: "FEMININO",
          vivo: true,
          urlFoto: "../../../public/4.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-14T10:40:00Z",
            localDesaparecimentoConcat: "Zona Sul - São Paulo, SP",
          },
        },
        {
          id: 15,
          nome: "Bruna Alves",
          idade: 32,
          sexo: "FEMININO",
          vivo: false,
          urlFoto: "../../../public/5.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-15T20:00:00Z",
            localDesaparecimentoConcat: "Niterói - Rio de Janeiro, RJ",
          },
        },
        {
          id: 16,
          nome: "Thiago Silva",
          idade: 41,
          sexo: "MASCULINO",
          vivo: true,
          urlFoto: "../../../public/6.jpeg",
          ultimaOcorrencia: {
            dtDesaparecimento: "2025-03-16T08:30:00Z",
            localDesaparecimentoConcat: "Ipanema - Rio de Janeiro, RJ",
          },
        },
      ]);
    }, 2000); // Simula um tempo de carregamento
  });
}
