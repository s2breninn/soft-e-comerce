import InfoPerfil from "../../components/template/Perfil/InfoPerfil"
import Layout from "../../components/template/Layout"
import ArqPerfil from "../../components/template/Perfil/ArqPerfil"

export default function Perfil() {
  return (
    <Layout titulo="Perfil do usuário" subtitulo="Administre as suas informações se usuário">
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7">Perfil</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Detalhes do perfil do colaborador.</p>
        </div>
        <div className="mt-6 border-t border-gray-300">
          <dl className="divide-y  divide-gray-300">
            <InfoPerfil label="Nome Completo" nome="Breno Mendes Bernardo"/>
            <InfoPerfil label="Papel" info="Desenvolvedor"/>
            <InfoPerfil label="E-mail" info="b.mendesbernardo2020@gmail.com"/>
            <InfoPerfil label="CPF" info="111.222.333-44"/>
            <InfoPerfil label="Salário" info="1600"/>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">Arquivos:</dt>
              <dd className="mt-2 text-sm sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <ArqPerfil nomeArq="contrato_admissão.pdf" tamanhoArq="2.5mb"/>
                  <ArqPerfil nomeArq="contrato_direito_imagem.pdf" tamanhoArq="458kb"/>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Layout>
  )
}
