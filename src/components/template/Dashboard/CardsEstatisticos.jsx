import React from 'react'

export default function CardsEstatisticos(props) {
  return (
    <div class="flex flex-col bg-white/5 p-8">
        <dt class="text-sm font-semibold leading-6 text-gray-300">{props.label}</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-white">{props.label === 'Total de vendas' ? `R$ ${props.info}` : props.info}</dd>
    </div>
  )
}
