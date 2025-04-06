import React from 'react';

interface FotoPessoaProps {
  url?: string | null;
  alt?: string;
  className?: string;
}

const FotoPessoa: React.FC<FotoPessoaProps> = ({ url, alt = 'Imagem', className = '' }) => {
  const imagemDefault = '/img/img default.png';

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null; // evita loop infinito
    e.currentTarget.src = imagemDefault;
  };

  return (
    <img
      src={url || imagemDefault}
      onError={handleError}
      alt={alt}
      className={className}
    />
  );
};

export default FotoPessoa;
