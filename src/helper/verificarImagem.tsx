export const verificarImagem = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return false; 
    }

    const contentType = response.headers.get("Content-Type");
    return contentType && contentType.includes("image");
  } catch (error) {
    console.error("Erro ao verificar a imagem:", error);
    return false;
  }
};
