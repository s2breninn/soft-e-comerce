import React from 'react'

export default function InputContato(props) {
  return (
    <div className={`${props.className}`}>
        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">{props.label}</label>
        <input 
            type={props.tipo} 
            placeholder={props.placeholder} 
            class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
        />
    </div>
  )
}
