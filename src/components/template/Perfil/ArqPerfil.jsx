import React from 'react'

export default function ArqPerfil(props) {
  return (
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
        <div className="flex w-0 flex-1 items-center">
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
            <span className="truncate font-medium">{props.nomeArq}</span>
            <span className="flex-shrink-0 text-gray-400">{props.tamanhoArq}</span>
        </div>
        </div>
        <div className="ml-4 flex-shrink-0">
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Download
        </a>
        </div>
    </li>
  )
}
