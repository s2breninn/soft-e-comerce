import useAppData from "../../data/hook/useAppData";
import AvatarUsuario from "./Perfil/AvatarUsuario";
import BotaoAlterarTema from "./BotaoAlterarTema";
import Titulo from "./Titulo";

export default function Cabecalho(props) {
  const { tema, alternarTema } = useAppData()
  
  return (
    <div className={`flex`}>
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
        <div className={`flex flex-grow justify-end items-center`}>
          <BotaoAlterarTema tema={tema} alternarTema={alternarTema}/>
          <AvatarUsuario className="ml-3"/>
        </div>
    </div>
  )
}
