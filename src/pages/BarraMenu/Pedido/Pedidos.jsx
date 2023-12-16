import { useState } from "react"
import ModalPedido from "../../../components/pedido/ModalPedido"
import Pedido from "../../../components/pedido/Pedido"
import Layout from "../../../components/template/Layout"
import { InconeAdd } from "../../../components/icons"
import ModalNovoPedido from "./ModalNovoPedido"
import {pedidos} from '../../../model/data'

export default function Pedidos() {
  const [showModal, setShowModal] = useState(false)
  const [novoPedido, setNovoPedido] = useState(false)
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  const handleOnClose = () => {
    setShowModal(false)
    setPedidoSelecionado(null)
  }


  const handleOnCloseAdd = () => {
    setNovoPedido(false)
  }

  const handlePedidoClick = (pedido) => {
    setPedidoSelecionado(pedido);
    setShowModal(true);
  };

  return (
    <Layout titulo="Pedidos" subtitulo="Aqui você irá gerennciar seus pedidos">
        <div>
          <div className="flex items-center justify-between">
            <h3>Pedidos</h3>
            <button className="flex items-center px-2 py-1 bg-green-700 text-white rounded-md w-auto" onClick={() => setNovoPedido(true)}>{InconeAdd}Novo pedido</button>
          </div>

            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3">
              {pedidos.map((pedido) => (
                <button 
                  key={pedido.id} 
                  onClick={() => handlePedidoClick(pedido)} 
                  className="w-auto mx-2"
                  //grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6
                  //className="lg:w-1/2 w-full mx-2"
                >
                  <Pedido
                     mesa={pedido.mesa}
                     cliente={pedido.cliente}
                     nomeProdutoPedido={pedido.produtoPedido.nome}
                     valor={pedido.produtoPedido.valor}
                     quantidade={pedido.produtoPedido.quantidade}
                     />
                </button>
              ))}
            </div>
          <ModalPedido onClose={handleOnClose} visible={showModal} pedido={pedidoSelecionado}/>
          <ModalNovoPedido url="/createpedido" onClose={handleOnCloseAdd} visible={novoPedido}/>
        </div>
        

    </Layout>

  )
}
