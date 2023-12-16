import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../data/hook/useAuth'

export default function AvatarUsuario(props) {
    const { usuario } = useAuth()
    
  return (
    <Link to="/perfil">
        <img src={usuario?.imageUrl ?? '/images/avatar.svg'} alt="" className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}/>
    </Link>
  )
}
