import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";
import useAppData from '../../data/hook/useAppData'

export default function Layout(props) {
  const { tema } = useAppData()
  
  return (
    <div className={`${tema} flex min-h-screen w-screen`}>
        <MenuLateral/>
        <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
            <Conteudo>
              {props.children}
            </Conteudo>
        </div>
    </div>
  )
}
