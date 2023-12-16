import React, { useState, useEffect } from 'react';
import CardsEstatisticos from "../components/template/Dashboard/CardsEstatisticos";
import Layout from "../components/template/Layout";
import { pedidos } from '../model/data';

function contarPedidos(statusDesejado) {
  const pedidosComStatus = pedidos.filter(pedido => pedido.status === statusDesejado);
  return pedidosComStatus.length;
}

function calcularTotalVendas() {
  let totalVendas = 0;
  const pedidosPagos = pedidos.filter(pedido => pedido.status === 'Pago');

  pedidosPagos.forEach(pedido => {
    pedido.produtoPedido.forEach(produto => {
      totalVendas += produto.preco * produto.quantidade;
    });
  });
  return totalVendas.toFixed(2);
}

function contarPedidosPagos() {
  const pedidosPagos = pedidos.filter(pedido => pedido.status === 'Pago');
  return pedidosPagos.length;
}

export default function Dashbord() {
  const [pedidosEnviados, setPedidosEnviados] = useState(0);
  const [usuariosAtivos, setUsuariosAtivos] = useState(0);
  const [totalVendas, setTotalVendas] = useState(0);
  const [pedidosPagos, setPedidosPagos] = useState(0);

  useEffect(() => {
    const pedidosEnviadosCount = contarPedidos('Aguardando pagamento') + contarPedidos('Pedido em produção') + contarPedidos('Pedido na fila') + contarPedidos('Pago');
    setPedidosEnviados(pedidosEnviadosCount);
    // Lógica similar para outros dados estatísticos como usuários ativos, produtos vendidos, total de vendas, etc.
    // Exemplo:
    // const usuariosAtivosCount = // lógica para contar usuários ativos
    // setUsuariosAtivos(usuariosAtivosCount);
    // ... (outros cálculos)
    const totalVendasCalculado = calcularTotalVendas();
    setTotalVendas(totalVendasCalculado);

    const pedidosPagosCount = contarPedidosPagos();
    setPedidosPagos(pedidosPagosCount);
    // Nota: Certifique-se de ajustar essa lógica de acordo com os dados e cálculos reais da sua aplicação.
  }, []);

  return (
    <Layout titulo="Dashbord" subtitulo="Aqui você irá gerenciar tirará metricar e relatórios sobre suas vendas e etc.">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* ... (outro conteúdo do seu componente) */}
        <dl className="mt-3 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <CardsEstatisticos label="Pedidos enviados" info={pedidosEnviados} />
          {/* Adicione mais CardsEstatisticos com os dados calculados */}
          {/* Exemplo: */}
          <CardsEstatisticos label="Usuários ativos" info={usuariosAtivos} />
          <CardsEstatisticos label="Produtos vendidos" info={pedidosPagos} /> 
          <CardsEstatisticos label="Total de vendas" info={totalVendas} />
        </dl>
      </div>
    </Layout>
  )
}
