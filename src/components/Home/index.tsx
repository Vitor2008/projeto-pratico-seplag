
// export default function Home() {

//     function Test(){
//         console.log("Teste")
//     }

//   return (
//     <div>
//         <header>Projeto teste</header>
//         <button onClick={Test} type="button">Salvar</button>
//     </div>
//   )
// }

import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate(); // Hook para navegação

  function handleSalvar() {
    const id = 123; // ou o ID real da pessoa, vindo de API ou input
    navigate(`/detalhes/${id}`);
  }

  return (
    <div>
      <header>Projeto teste</header>
      <button onClick={handleSalvar} type="button">Salvar</button>
    </div>
  );
}

