const pedidos = [
    {
      id: 1,
      mesa: 'Mesa 01',
      cliente: {
        id: 101,
        nome: 'João',
        endereco: 'Rua Exemplo, 123',
        // Outros detalhes do cliente...
      },
      produtoPedido: [
        {
          id: 1,
          nome: 'Hambúrguer',
          preco: 12.5,
          quantidade: 2,
          // Outros detalhes do produto...
        },
        {
          id: 2,
          nome: 'Refrigerante',
          preco: 4.5,
          quantidade: 1,
          // Outros detalhes do produto...
        },
        // Outros produtoPedido do pedido...
      ],
    },
    {
      id: 2,
      mesa: 'Mesa 02',
      cliente: {
        id: 102,
        nome: 'Maria',
        endereco: 'Av. Teste, 456',
        // Outros detalhes do cliente...
      },
      produtoPedido: [
        {
          id: 3,
          nome: 'Pizza',
          preco: 18.99,
          quantidade: 1,
          // Outros detalhes do produto...
        },
        {
          id: 4,
          nome: 'Batata frita',
          preco: 6.0,
          quantidade: 1,
          // Outros detalhes do produto...
        },
        // Outros produtoPedido do pedido...
      ],
    },
    {
        id: 3,
        mesa: 'Mesa 20',
        cliente: {
          id: 103,
          nome: 'Vitoria',
          endereco: 'Av. Teste, 456',
          // Outros detalhes do cliente...
        },
        produtoPedido: [
          {
            id: 4,
            nome: 'Hamburguer com batata frita',
            preco: 20,
            quantidade: 1,
            // Outros detalhes do produto...
          },
          {
            id: 5,
            nome: 'Açai',
            preco: 17,
            quantidade: 1,
            // Outros detalhes do produto...
          },
          {
            id: 6,
            nome: 'Coca cola 300ml',
            preco: 6,
            quantidade: 1,
            // Outros detalhes do produto...
          },
          // Outros produtoPedido do pedido...
        ],
      },
    // Outros pedidos...
  ];
  
  export { pedidos };