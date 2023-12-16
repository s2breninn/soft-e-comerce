import React from 'react'

export default function InfoPerfil(props) {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6">{props.label}</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-500">{props.label === 'Salário' ? `R$ ${props.info}` : props.info}</dd>
    </div>
  )
}
