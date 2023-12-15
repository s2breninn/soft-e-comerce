import React from 'react'
import useAppData from '../../data/hook/useAppData'

export default function Pedido(props) {
    const { tema } = useAppData()

    return (
        <div className={`${tema} h-20 flex flex-row items-center dark:bg-gray-700 bg-gray-400 border-l-8 rounded-lg p-5 mt-5 cursor-pointer`}>
            {props.mesa}
        </div>
    )
}
