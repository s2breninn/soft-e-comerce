import React, { useState } from 'react'
import Modal from '../modal/Modal'
import { IconeCheck, InconeFechar } from '../icons'
import InputAddPedido from '../inputAddPedido/InputAddPedido'
import InputObsevarcao from '../inputAddPedido/InputObservarcao'
import InputAddRadio from '../inputAddPedido/InputAddRadio'

export default function ModalNovoPedido({ visible, onClose }) {
    const [nomeCliente, setNomeCliente] = useState('')
    const [emailCliente, setEmailCliente] = useState('')
    const [senha, setSenha] = useState('')
    
    if(!visible) return null

    const handleOnclose = () => onClose()

    return (
        <Modal>
            <div className="border-b inset-1 border-gray-900/10 bg-slate-200 p-4 my-32 rounded-lg pb-12">
                <div className='flex items-center justify-between'>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Pedido do cliente</h2>
                    <button className='text-gray-800' onClick={handleOnclose}>
                        {InconeFechar(8)}
                    </button>
                </div>
                {/*<p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>*/}

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <InputAddPedido
                        label="Nome"
                        tipo='text'
                        valorMudou={setNomeCliente}
                        obrigatorio
                    />
                    <InputAddPedido
                        label="Email"
                        tipo='email'
                        valorMudou={setEmailCliente}
                        obrigatorio
                    />

                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Mesa
                        </label>
                        <div className="mt-2">
                            <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                            <option>Selecine a mesa</option>
                            <option>Mesa 01</option>
                            <option>Mesa 02</option>
                            <option>Mesa 03</option>
                            </select>
                        </div>
                    </div>
                    <div className=''>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Tipo de embalagem </label>
                        <InputAddRadio label="Embalar para levar"/>
                        <InputAddRadio label="Comer no local"/>
                    </div>
                    <InputObsevarcao label="Observação"/>
                </div>
                <div className='flex justify-end mt-8'>
                    <button className="flex items-center px-2 py-1 bg-green-700 text-white rounded-md w-auto" onClick={() => setAddPedido(true)}>{IconeCheck}Fechar Pedido</button>
                </div>
            </div>
        </Modal>
    )
}
