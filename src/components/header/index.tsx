
interface buttonDetalhes{
    isOpen: boolean
}
export default function Header({isOpen}:buttonDetalhes) {

    function Test(){
        console.log("Teste")
    }

  return (
    <div>
        <header>Projeto teste</header>
        <button onClick={Test} type="button">Salvar</button>
    </div>
  )
}
