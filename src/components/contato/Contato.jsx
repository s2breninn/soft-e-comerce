import { IconeEmail, IconeLoc, IconeTel } from "../icons";
import AreaContatos from "./AreaContatos";
import InputContato from "./InputContato";

export default function Contato() {
    
  return (
    <section class="bg-gray-100 dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
            <div>
                <p class="font-medium text-blue-500 dark:text-blue-400">Contatos</p>
                <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Avalie nossa equipe!</h1>
                <p class="mt-3 text-gray-500 dark:text-gray-400">Adorariamos ouvir de você. Por favor preencha este formulário ou envie um e-mail</p>
            </div>

            <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <AreaContatos  svg={IconeEmail} titulo="E-mail" descricao="Entre em contato pelo e-mail. Nossa equipe te atende!" informacao="emailteste2023@email.com.br"/>
                    <AreaContatos  svg={IconeLoc} titulo="Localização" descricao="Se localizamos na rua Floriano Peixoto, n°104, Pavão, Minas Gerais" informacao="Abrir mapa"/>
                    <AreaContatos  svg={IconeLoc} titulo="E-mail" descricao="Entre em contato pelo e-mail. Nossa equipe te atende!" informacao="emailteste2023@email.com.br"/>
                    <AreaContatos  svg={IconeTel} titulo="Telefone" descricao="Seg a Sex das  18h às 00h" informacao="(33) 99999-9999"/>
                </div>

                <div class="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                    <form>
                        <div class="-mx-2 md:items-center md:flex">
                            <InputContato className="flex-1 px-2 mt-4 md:mt-0" label="Primeiro nome" tipo="text" placeholder="João"/>
                            <InputContato className="flex-1 px-2 mt-4 md:mt-0" label="Sobrenome" tipo="text" placeholder="Penha"/>
                        </div>
                        <div class="mt-4">
                            <InputContato  className="block mb-2 text-sm text-gray-600 dark:text-gray-200" label="E-mail" tipo="email" placeholder="joaopenha@exemplo.com"/>
                        </div>

                        <div class="w-full mt-4">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Avaliação</label>
                            <textarea class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Deixe a sua avaliação aqui..."></textarea>
                        </div>

                        <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Enviar Avaliação
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
