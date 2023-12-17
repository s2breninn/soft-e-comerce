import { FaHamburger, FaCocktail, FaCoffee } from 'react-icons/fa'; // Importando ícones do React Icons
import Header from "../components/Header/Header"
import Contato from "../components/contato/Contato"
import Footer from "../components/footer/Footer"
import Produtos from "../components/produtos/Produtos"

export default function Home() {
  return (
    <div className="flex justify-center flex-col text-center">
      <Header/>
      <div class="container px-3 py-9 mx-auto mt-28">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Peça o seu <span class="text-orange-500">Pedido</span></h1>

                    <p class="mt-3 text-gray-600 dark:text-gray-400">Seja o primeira a  <span class="font-medium text-orange-500">Saboriar</span> nossos lanches</p>

                    <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>

                        <button class="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full max-w-md" src="https://img.freepik.com/fotos-premium/delicioso-hamburguer-fresco-isolado-no-fundo-branco_93675-104922.jpg?w=826" alt="email illustration vector art"/>
            </div>
        </div>
      </div>

      <Produtos/>

      {/*Sobre*/}

      <section className="bg-white dark:bg-gray-900 my-52">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <FaHamburger className="w-8 h-8 text-gray-800 dark:text-white" />

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Hamburgueres Premium</h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Conheça nossos deliciosos hamburgueres premium, feitos com ingredientes frescos e selecionados para proporcionar a melhor experiência gastronômica.
              </p>
            </div>

            <div>
              <FaCocktail className="w-8 h-8 text-gray-800 dark:text-white" />

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Bebidas Refrescantes</h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Acompanhe seu lanche com as nossas variedades de bebidas refrescantes, desde refrigerantes até sucos naturais para complementar sua refeição.
              </p>
            </div>

            <div>
              <FaCoffee className="w-8 h-8 text-gray-800 dark:text-white" />

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Café e Sobremesas</h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Explore nossa seleção de cafés especiais e deliciosas sobremesas para tornar sua experiência ainda mais agradável.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/*Contato */}
      <Contato/>
      <Footer/>
    </div>
  )
}
