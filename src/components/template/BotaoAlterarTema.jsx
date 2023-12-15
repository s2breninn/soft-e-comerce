import { IconeLua, IconeSol } from "../icons"

export default function BotaoAlterarTema(props) {
  return props.tema === 'dark' ?  (
    <div onClick={props.alternarTema} className={`hidden sm:flex items-center justify-start cursor-pointer bg-gradient-to-r from-yellow-300 to-orange-500 w-14 lg:w-24 h-8 p-1 rounded-full`}>
        <div  className={`flex items-center justify-center bg-white text-yellow-600 w-auto h-auto rounded-full'
        `}>
            {IconeSol(5)}
        </div>
        <div className={`hidden lg:flex items-center ml-2 text-white`}>
            <span className="text-sm">Claro</span>
        </div>
    </div>
  ) : (
    <div onClick={props.alternarTema} className={`hidden sm:flex items-center justify-end cursor-pointer bg-gradient-to-r from-gray-700 to-gray-900 w-14 lg:w-24 h-8 p-1 rounded-full`}>
        <div className={`hidden lg:flex items-center mr-2 text-gray-200`}>
            <span className="text-sm">Escuro</span>
        </div>
        <div  className={`flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full'
        `}>
            {IconeLua(4)}
        </div>
    </div>
  )
}
