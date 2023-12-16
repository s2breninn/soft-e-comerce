const pedidos = [
    {
      id: 1,
      mesa: 'Mesa 01',
      status: 'Aguardando pagamento',
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
      status: 'Pedido em produção',
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
        status: 'Pedido na fila',
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
    {
      id: 4,
      mesa: 'Mesa 07',
      status: 'Pago',
      cliente: {
        id: 103,
        nome: 'Antonio Bernardo',
        endereco: 'Rua Exemplo, 123',
        // Outros detalhes do cliente...
      },
      produtoPedido: [
        {
          id: 7,
          nome: 'Hambúrguer com cheddar',
          preco: 12.5,
          quantidade: 10,
          // Outros detalhes do produto...
        },
        {
          id: 8,
          nome: 'Refrigerante',
          preco: 4.5,
          quantidade: 3,
          // Outros detalhes do produto...
        },
        // Outros produtoPedido do pedido...
      ],
    },
    {
      id: 5,
      mesa: 'Mesa 08',
      status: 'Pedido em produção',
      cliente: {
        id: 104,
        nome: 'Julia Mendes',
        endereco: 'Av. Teste, 456',
        // Outros detalhes do cliente...
      },
      produtoPedido: [
        {
          id: 9,
          nome: 'Pizza',
          preco: 18.99,
          quantidade: 14,
          // Outros detalhes do produto...
        },
      ],
    },
    {
        id: 6,
        mesa: 'Mesa 09',
        status: 'Pedido na fila',
        cliente: {
          id: 103,
          nome: 'Armando da Silda',
          endereco: 'Av. Teste, 456',
          // Outros detalhes do cliente...
        },
        produtoPedido: [
          {
            id: 11,
            nome: 'Hamburguer com batata frita',
            preco: 20,
            quantidade: 1,
            // Outros detalhes do produto...
          },
          {
            id: 12,
            nome: 'Açai',
            preco: 17,
            quantidade: 1,
            // Outros detalhes do produto...
          },
          {
            id: 13,
            nome: 'Coca cola 300ml',
            preco: 6,
            quantidade: 1,
            // Outros detalhes do produto...
          },
          // Outros produtoPedido do pedido...
        ],
      },
      {
        id: 1,
        mesa: 'Mesa 01',
        status: 'Aguardando pagamento',
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
        status: 'Pedido em produção',
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
          status: 'Pedido na fila',
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
      {
        id: 4,
        mesa: 'Mesa 07',
        status: 'Aguardando pagamento',
        cliente: {
          id: 103,
          nome: 'Antonio Bernardo',
          endereco: 'Rua Exemplo, 123',
          // Outros detalhes do cliente...
        },
        produtoPedido: [
          {
            id: 7,
            nome: 'Hambúrguer com cheddar',
            preco: 12.5,
            quantidade: 10,
            // Outros detalhes do produto...
          },
          {
            id: 8,
            nome: 'Refrigerante',
            preco: 4.5,
            quantidade: 3,
            // Outros detalhes do produto...
          },
          // Outros produtoPedido do pedido...
        ],
      },
      {
        id: 5,
        mesa: 'Mesa 08',
        status: 'Pedido em produção',
        cliente: {
          id: 104,
          nome: 'Julia Mendes',
          endereco: 'Av. Teste, 456',
          // Outros detalhes do cliente...
        },
        produtoPedido: [
          {
            id: 9,
            nome: 'Pizza',
            preco: 18.99,
            quantidade: 14,
            // Outros detalhes do produto...
          },
        ],
      },
      {
          id: 6,
          mesa: 'Mesa 09',
          status: 'Pedido na fila',
          cliente: {
            id: 103,
            nome: 'Armando da Silda',
            endereco: 'Av. Teste, 456',
            // Outros detalhes do cliente...
          },
          produtoPedido: [
            {
              id: 11,
              nome: 'Hamburguer com batata frita',
              preco: 20,
              quantidade: 1,
              // Outros detalhes do produto...
            },
            {
              id: 12,
              nome: 'Açai',
              preco: 17,
              quantidade: 1,
              // Outros detalhes do produto...
            },
            {
              id: 13,
              nome: 'Coca cola 300ml',
              preco: 6,
              quantidade: 1,
              // Outros detalhes do produto...
            },
            // Outros produtoPedido do pedido...
          ],
        },
        {
          id: 1,
          mesa: 'Mesa 01',
          status: 'Aguardando pagamento',
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
          status: 'Pedido em produção',
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
            status: 'Pedido na fila',
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
        {
          id: 4,
          mesa: 'Mesa 07',
          status: 'Aguardando pagamento',
          cliente: {
            id: 103,
            nome: 'Antonio Bernardo',
            endereco: 'Rua Exemplo, 123',
            // Outros detalhes do cliente...
          },
          produtoPedido: [
            {
              id: 7,
              nome: 'Hambúrguer com cheddar',
              preco: 12.5,
              quantidade: 10,
              // Outros detalhes do produto...
            },
            {
              id: 8,
              nome: 'Refrigerante',
              preco: 4.5,
              quantidade: 3,
              // Outros detalhes do produto...
            },
            // Outros produtoPedido do pedido...
          ],
        },
        {
          id: 5,
          mesa: 'Mesa 08',
          status: 'Pedido em produção',
          cliente: {
            id: 104,
            nome: 'Julia Mendes',
            endereco: 'Av. Teste, 456',
            // Outros detalhes do cliente...
          },
          produtoPedido: [
            {
              id: 9,
              nome: 'Pizza',
              preco: 18.99,
              quantidade: 14,
              // Outros detalhes do produto...
            },
          ],
        },
        {
            id: 6,
            mesa: 'Mesa 09',
            status: 'Pedido na fila',
            cliente: {
              id: 103,
              nome: 'Armando da Silda',
              endereco: 'Av. Teste, 456',
              // Outros detalhes do cliente...
            },
            produtoPedido: [
              {
                id: 11,
                nome: 'Hamburguer com batata frita',
                preco: 20,
                quantidade: 1,
                // Outros detalhes do produto...
              },
              {
                id: 12,
                nome: 'Açai',
                preco: 17,
                quantidade: 1,
                // Outros detalhes do produto...
              },
              {
                id: 13,
                nome: 'Coca cola 300ml',
                preco: 6,
                quantidade: 1,
                // Outros detalhes do produto...
              },
              // Outros produtoPedido do pedido...
            ],
          },
          
  ];
  
  export { pedidos };