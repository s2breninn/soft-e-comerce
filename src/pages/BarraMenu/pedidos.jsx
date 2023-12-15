import { useState } from "react"
import ModalPedido from "../../components/pedido/ModalPedido"
import Pedido from "../../components/pedido/Pedido"
import Layout from "../../components/template/Layout"
import { InconeAdd } from "../../components/icons"
import ModalNovoPedido from "../../components/pedido/ModalNovoPedido"

export default function Pedidos() {
  const [showModal, setShowModal] = useState(false)
  const [novoPedido, setNovoPedido] = useState(false)

  const handleOnClose = () => setShowModal(false)
  const handleOnCloseAdd = () => setNovoPedido(false)
  
  return (
    <Layout titulo="Pedidos" subtitulo="Aqui você irá gerennciar seus pedidos">
        <div>
          <div className="flex items-center justify-between">
            <h3>Pedidos</h3>
            <button className="flex items-center px-2 py-1 bg-green-700 text-white rounded-md w-auto" onClick={() => setNovoPedido(true)}>{InconeAdd}Novo pedido</button>
          </div>

          <div>
            <button onClick={() => setShowModal(true)} className="lg:w-1/2 w-full">
              <Pedido titulo="Mesa 01"/>
              <Pedido titulo="Mesa 02"/>
              <Pedido titulo="Mesa 03"/>
              <Pedido titulo="Mesa 04"/>
              <Pedido titulo="Mesa 05"/>
              <Pedido titulo="Mesa 06"/>
              <Pedido titulo="Mesa 07"/>
            </button>
            

          </div>
          <ModalPedido onClose={handleOnClose} visible={showModal}/>
          <ModalNovoPedido onClose={handleOnCloseAdd} visible={novoPedido}/>
        </div>
        

    </Layout>

  )
}
