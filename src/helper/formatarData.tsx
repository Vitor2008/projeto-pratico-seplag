export const formatarData = (dataString: string | null | undefined): string => {
    if (!dataString) return "Não informado";
  
    const data = new Date(dataString);
    if (isNaN(data.getTime())) return "Data inválida";
  
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
  };
  