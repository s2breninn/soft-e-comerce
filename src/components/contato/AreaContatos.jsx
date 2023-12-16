export default function AreaContatos(props) {
  return (
    <div>
        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
            {props.svg}
        </span>
        
        <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">{props.titulo}</h2>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{props.descricao}</p>
        <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">{props.informacao}</p>
    </div>
  )
}
