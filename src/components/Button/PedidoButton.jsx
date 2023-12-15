import React from 'react'
import Pedido from '../pedido/Pedido';

export default function PedidoButton({pedido, setShowModal}) {
    const { mesa, cliente, produtoPedido } = pedido;

    const handlePedidoClick = () => {
        setShowModal(true);
    };

    return (
        <button
        onClick={handlePedidoClick}
        className="lg:w-1/2 w-full"
        >
        <Pedido
            mesa={mesa}
            cliente={cliente}
            nomeProdutoPedido={produtoPedido.nome}
            valor={produtoPedido.valor}
            quantidade={produtoPedido.quantidade}
        />
        </button>
    );
}
