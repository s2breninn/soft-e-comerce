import React from 'react'

export default function Modal(props) {
  return (
    <div className="fixed inset-0 h-auto overflow-y-scroll md:px-6 w-full flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm">
        {props.children}
    </div>
  )
}
