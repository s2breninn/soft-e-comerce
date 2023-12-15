import React from 'react'
import Modal from '../modal/Modal'

export default function ModalConfirmarCancelamento() {
  return (
    <Modal>
        <h3>Realmente deseja cancelar o pedido da mesa 01?</h3>
        <button className="flex items-center px-2 py-1 bg-red-700 text-white rounded-md w-auto">Não</button>
        <button className="flex items-center px-2 py-1 bg-green-700 text-white rounded-md w-auto">Sim</button>
    </Modal>
  )
}
