import { pedidos } from "../model/data";

export function contarPedidos(statusDesejado) {
    const pedidosComStatus = pedidos.filter(pedido => pedido.status === statusDesejado);
    return pedidosComStatus.length;
  }
  
  // Exemplo de uso:
  const statusAguardandoPagamento = 'Aguardando pagamento';
  const quantidadePedidosAguardandoPagamento = contarPedidos(statusAguardandoPagamento);
  console.log(`Quantidade de pedidos aguardando pagamento: ${quantidadePedidosAguardandoPagamento}`);
  
  const statusProducao = 'Pedido em produção';
  const quantidadePedidosEmProducao = contarPedidos(statusProducao);
  console.log(`Quantidade de pedidos em produção: ${quantidadePedidosEmProducao}`);
  
  const statusNaFila = 'Pedido na fila';
  const quantidadePedidosNaFila = contarPedidos(statusNaFila);
  console.log(`Quantidade de pedidos na fila: ${quantidadePedidosNaFila}`);