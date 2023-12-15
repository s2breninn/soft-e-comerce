import { IconeAjustes, IconeCasa, IconeSair, IconeSino, InconePedido } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col dark:bg-gray-900 dark:text-gray-200">
      <div className="h-20 w-20 flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo/>
      </div>
        <ul className="flex-grow">
          <MenuItem url="/dashboard" texto="Início" icone={IconeCasa}/>
          <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
          <MenuItem url="/notificacoes" texto="Notificacões" icone={IconeSino}/>
          <MenuItem url="/pedidos" texto="Pedidos" icone={InconePedido}/>
        </ul>
        <ul>
          <MenuItem url="/" texto="Sair" icone={IconeSair} className="text-red-500 dark:text-red-500 hover:bg-red-500 dark:hover:text-white hover:text-white"/> 
        </ul>
    </aside>
  )
}
