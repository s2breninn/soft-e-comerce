import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MenuItem(props) {
  
  return (
    <li className="hover:bg-gray-100 cursor-pointer dark:text-gray-200 dark:hover:bg-gray-800" onClick={props.onClick}>
        <Link to={props.url}>
          <a className={`flex flex-col justify-center items-center w-20 h-20 text-gray-600 ${props.className}`}>
            {props.icone}
            <span className="text-xs font-light">{props.texto}</span>
          </a>
        </Link>
    </li>
  )
}
