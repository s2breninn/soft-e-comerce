import { createContext, useState } from "react"

const AppContext = createContext({})

export function AppProvider(props){
  const [tema, setTema] = useState('dark')

  function alternarTema(){
    setTema(tema === '' ? 'dark' : '')
  }
  
  return(
    <div>
      <AppContext.Provider value={{tema, alternarTema}}>
        {props.children}  
      </AppContext.Provider>
    </div>
  )
}

export default AppContext

{/*Provider -> Prover os dados (Mais indicado para se trabalhar)
e Consumer -> 

*/}