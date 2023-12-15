import React from 'react'
import Modal from '../modal/Modal'
import { InconeFechar } from '../icons'

export default function ModalPedido({ visible, onClose }) {
    if(!visible) return null

    const handleOnclose = () => onClose()
    
    return (
        <Modal>
            <div className="bg-white rounded-md text-gray-600 shadow-xl overflow-hidden max-w-md lg:w-full w-96 md:w-1/2 xl:w-1/3 z-50">
                <div className="bg-indigo-500 text-white px-4 py-2 flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Mesa 01</h2>
                    <button className='text-white' onClick={handleOnclose}>
                        {InconeFechar(8)}
                    </button>
                </div>
                <div className='p-4'>
                    <h1 className='font-bold'>Detalhes do pedido</h1>
                    <div className='mt-2'>
                        {/*Dados do cliente*/}
                        <div>
                            <p>Cliente: Breno Mendes Bernardo</p>
                            <p>Mesa 01</p>
                        </div>
                        {/*Produtos e qunatidade*/}
                        <div className='mt-8'>
                            <p>1 - Pizza frango com catupiry</p>
                            <p>2 - Coca coca 600ml</p>
                        </div>
                        {/*Valor total*/}
                        <div className='mt-8'>
                            <h3 className='text-red-600 font-extrabold'>Total</h3>
                            <h2 className='font-semibold'>R$ 34,89</h2>
                        </div>
                    </div>
                </div>                                
                <div className="border-t px-4 py-2 flex justify-end">
                    <button onClick={handleOnclose} className="px-3 py-1 bg-red-700 text-white  rounded-md w-full sm:w-auto mx-2">Cancelar</button>
                    <button button onClick={handleOnclose} className="px-3 py-1 bg-green-700 text-white  rounded-md w-full sm:w-auto">Finalizar pedido</button>
                </div>
            </div>
        </Modal>
    )
}