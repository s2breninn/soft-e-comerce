import Layout from "../../components/template/Layout"
import useAppData from '../../data/hook/useAppData'

export default function Notificacoes() {
  const { tema, alternarTema} = useAppData()
  
  return (
    <Layout titulo="Notificações" subtitulo="Aqui você irá gerennciar suas notificações">
        <h3>Notificações</h3>
        {tema}
        <button type="submit" onClick={alternarTema}>Alternar tema</button>
    </Layout>
  )
}
