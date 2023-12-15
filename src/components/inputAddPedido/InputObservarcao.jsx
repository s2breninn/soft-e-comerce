import React from 'react'

export default function InputObservarcao(props) {
  return (
    <div className="col-span-full">
        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
        <div className="mt-2">
        <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={''}
        />
        </div>
    </div>
  )
}
