import useAppData from "../../data/hook/useAppData";
import BotaoAlterarTema from "./BotaoAlterarTema";
import Titulo from "./Titulo";

export default function Cabecalho(props) {
  const { tema, alternarTema } = useAppData()
  
  return (
    <div className={`flex`}>
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
        <div className={`flex flex-grow justify-end`}>
          <BotaoAlterarTema tema={tema} alternarTema={alternarTema}/>
        </div>
    </div>
  )
}
