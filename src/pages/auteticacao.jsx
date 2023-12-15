import React, { useState } from 'react'
import AuthInput from '../components/auth/AuthInpunt'
import { IconeAtencao } from '../components/icons'
import useAuth from '../data/hook/useAuth'

export default function Auteticacao() {
  const { usuario, loginGloogle } = useAuth()
  
  const [modo, setModo] = useState('login')
  const [erro, setErro] = useState(null)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function exibirErro(msg, tempoEmSegundos=3){
    setErro(msg)
    setTimeout(() => setErro(null), tempoEmSegundos * 1000)
  }

  function submeter(){
    if(modo == 'login'){
      console.log('login')
    } else {
      console.log('cadastro')
    }
  }
  
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='hidden md:block md:w-1/2 lg:w-2/3'>
        <img className='h-screen w-full object-cover' src="https://source.unsplash.com/random" alt="Imagem da tela de autenticação" />
      </div>

      <div className='md:w-1/2 m-10 w-full lg:w-1/3'>
        <h3 className='text-2xl font-bold mb-5'>
          {modo == 'login' ?  'Entre com a sua conta' : 'Cadastre-se na plataforma'}
        </h3>
        
        {erro ? (
          <div className='flex items-center bg-red-500 text-white py-3 px-5 my-2 border border-red-700 rounded-lg'>
            {IconeAtencao}teste
            <span className='ml-3 text-sm'>{erro}</span>
          </div>
        ): false }

        <AuthInput
          label="Email"
          tipo='text'
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo='password'
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <AuthInput
          label="Confirme sua senha"
          tipo='password'
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
          naoRenderizar={modo == 'login'}
        />
        
        <button onClick={submeter} className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6'>
          {modo == 'login' ?  'Entrar' : 'Cadastrar'}
        </button>

        <hr className='my-6 border-gray-300 w-full'/>

        <button onClick={loginGloogle} className='w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3'>
          Entrar com o Gloogle
        </button>

        {modo == 'login' ? (
            <p className='mt-8'>
              Novo por aqui? 
                <a onClick={() => setModo('cadastro')} className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'> Crie um conta gratuitamente</a>
            </p>
          ) : (
            <p className='mt-8'>
              já faz parte da nossa comunidade?
                <a onClick={() => setModo('login')} className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'> Entre com a suas credenciais</a>
            </p>
          )}
      </div>
    </div>
  )
}
