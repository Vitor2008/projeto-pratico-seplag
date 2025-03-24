

// export default function Detalhes() {

//   return (
//     <div>
//         <header>Tela detalhes</header>
//     </div>
//   )
// }

import { useParams } from 'react-router-dom';

export default function Detalhes() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes da Pessoa</h1>
      <p>ID: {id}</p>
    </div>
  );
}

