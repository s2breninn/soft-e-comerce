import React from 'react'

export default function AuthInput(props) {
  return props.naoRenderizar ? null : (
    <div className='flex flex-col mt-4'>
        <label>{props.label}</label>
        <input 
            type={props.tipo ?? 'text'} 
            value={props.valor} 
            onChange={e => props.valorMudou?.(e.target.value)}
            required={props.obrigatorio}
            className='px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-800 focus:outline-none focus:bg-white'
        />
    </div>
  )
}
