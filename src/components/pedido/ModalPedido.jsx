import React from 'react';
import Modal from '../modal/Modal';
import { InconeFechar } from '../icons';

export default function ModalPedido({ visible, onClose, pedido }) {
  if (!visible || !pedido) return null;

  const handleOnClose = () => onClose();

  const { mesa, cliente, produtoPedido, status } = pedido; // Usando dados do pedido ou do exemplo

  const calcularTotal = () => {
    let total = 0;
    for (let i = 0; i < produtoPedido.length; i++) {
      total += produtoPedido[i].preco * produtoPedido[i].quantidade;
    }
    return total.toFixed(2);
  };

  return (
    <Modal>
      <div className="bg-white rounded-md text-gray-600 shadow-xl overflow-hidden max-w-md lg:w-full w-96 md:w-1/2 xl:w-1/3 z-50">
        <div className="bg-indigo-500 text-white px-4 py-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold">{mesa}</h2>
          <button className='text-white' onClick={handleOnClose}>
            {InconeFechar(8)}
          </button>
        </div>
        <div className='p-4'>
          <h1 className='font-bold'>Detalhes do pedido</h1>
          <div className='mt-2'>
            {/* Dados do cliente */}
            <div>
              <p>Cliente: {cliente.nome}</p> {/* Acessando o nome do cliente */}
              <p>Mesa: {mesa}</p>
              <p>Status: {status}</p>
            </div>
            {/* Produtos e quantidade */}
            <div className='mt-8'>
              {produtoPedido.map((produto, index) => (
                <p key={index}>{produto.quantidade}x - {produto.nome}</p>
              ))}
            </div>
            {/* preco total */}
            <div className='mt-8'>
              <h3 className='text-red-600 font-extrabold'>Total</h3>
              <h2 className='font-semibold'>R$ {calcularTotal()}</h2>
            </div>
          </div>
        </div>
        <div className="border-t px-4 py-2 flex justify-end">
          <button onClick={handleOnClose} className="px-3 py-1 bg-red-700 text-white rounded-md w-full sm:w-auto mx-2">Cancelar</button>
          <button onClick={handleOnClose} className="px-3 py-1 bg-green-700 text-white rounded-md w-full sm:w-auto">Finalizar pedido</button>
        </div>
      </div>
    </Modal>
  );
}
