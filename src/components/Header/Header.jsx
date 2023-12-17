import React, { useState } from 'react'
import ListItem from './ListItem'

export default function Header() {
    const [open, setOpen] = useState(false);
    
  return (
    <header className={`flex w-full items-center justify-center bg-white dark:bg-dark`}>
        <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
                <img
                src="https://img.freepik.com/fotos-premium/hamburguer-de-hamburguer-gordo-e-suculento-fast-food-almoco-delicioso-comida-errada-prejudicial_86390-10246.jpg?w=826"
                alt="logo"
                className="dark:hidden w-24"
                />
                <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
                />
            </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
            <div>
                <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                    open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-gray-600 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-gray-600 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-gray-600 dark:bg-white"></span>
                </button>
                <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                    !open && "hidden"
                } `}
                >
                <ul className="block lg:flex">
                    <ListItem url="/" texto="Home"/>
                    <ListItem url="/dashboard" texto="Dashboard"/>
                    <ListItem url="/payment" texto="Pague"/>
                    <ListItem url="/about" texto="Sobre"/>
                </ul>
                </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <a href="/autenticacao" className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white">Entrar</a>
                <a href="/#" className="rounded-md bg-orange-500 px-7 py-3 text-base font-medium text-white hover:bg-primary/90">Cadastre-se</a>
            </div>
            </div>
        </div>
        </div>
    </header>
  )
}
