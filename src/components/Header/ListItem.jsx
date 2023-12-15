import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem(props) {
  return (
    <>
        <Link to={props.url}>
            <a className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex">
                {props.texto}
            </a>
        </Link>
    </>
  )
}
