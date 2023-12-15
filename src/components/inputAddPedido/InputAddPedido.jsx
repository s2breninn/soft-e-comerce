import React from 'react'

export default function InputAddPedido(props) {
  return (
    <div className="sm:col-span-4">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
        <div className="mt-2">
            <input
            type={props.tipo ?? 'text'} 
            value={props.valor} 
            onChange={e => props.valorMudou?.(e.target.value)}
            required={props.obrigatorio}
            className="block w-full rounded-md px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 bg-white mt-2 placeholder:text-gray-700 text-gray-700 border focus:border-gray-700 focus:outline-none focus:bg-white"
            />
        </div>
    </div>
  )
}
