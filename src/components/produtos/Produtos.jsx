import React from 'react'

const products = [
    {
      id: 1,
      name: 'Hamburguer',
      href: '#',
      imageSrc: 'https://img.freepik.com/fotos-gratis/vista-frontal-de-hamburguer-de-carne-em-fundo-escuro_179666-19384.jpg?w=740&t=st=1702769183~exp=1702769783~hmac=4cc043910e2e5904ce1d60f4857ad1bb81b6d3b685a17aa6b72d283cadd4d41a',
      imageAlt: "Hamburguer",
      price: 10,
    },
    {
        id: 1,
        name: 'X-Burguer',
        href: '#',
        imageSrc: 'https://as1.ftcdn.net/v2/jpg/03/03/57/06/1000_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg',
        imageAlt: "X-burguer",
        price: 17,
      },
      {
        id: 1,
        name: 'X-CheddarSimples',
        href: '#',
        imageSrc: 'https://t3.ftcdn.net/jpg/05/83/73/04/360_F_583730479_b8Unt04VFMQzCV373xrjNipK77kdqGWX.jpg',
        imageAlt: "X-tudo",
        price: 25,
      },
      {
        id: 1,
        name: 'Burguer simples',
        href: '#',
        imageSrc: 'https://img.freepik.com/fotos-gratis/mao-em-luvas-de-hamburguer-segurando-o-hamburguer-de-carne-no-fundo-preto_140725-303.jpg?t=st=1702769226~exp=1702769826~hmac=f8759673998fd31cb554ceb431d1c9d475347985d5d5ac95a223ef2cb6e73c83',
        imageAlt: "X-daCasa",
        price: 18,
      },
      {
        id: 1,
        name: 'X-Salada',
        href: '#',
        imageSrc: 'https://img.freepik.com/fotos-gratis/vista-frontal-saboroso-cheeseburger-com-carne-de-tomate-e-salada-verde-em-azul-escuro_140725-154046.jpg?w=740&t=st=1702769622~exp=1702770222~hmac=32bd3f0e2eb7fe20c6a102db93aac4bc4abc5d0f2c21d627bd45ea604f6d3a2c',
        imageAlt: "Hamburguer",
        price: 13,
      },
      {
          id: 1,
          name: 'X-MegaCheddar',
          href: '#',
          imageSrc: 'https://img.freepik.com/fotos-gratis/hamburgueres-de-vista-frontal-em-um-carrinho_141793-15545.jpg?w=1380&t=st=1702769571~exp=1702770171~hmac=0b4ddf349592952c210b4ce363cef379b48e23ef0d365326691ac49e7d915046',
          imageAlt: "X-burguer",
          price: 32,
        },
        {
          id: 1,
          name: 'X-Carne',
          href: '#',
          imageSrc: 'https://as2.ftcdn.net/v2/jpg/01/33/43/97/1000_F_133439746_HuGDE8hXa2USybE1gNta4zeQem0B5CID.jpg',
          imageAlt: "X-Carne",
          price: 35,
        },
        {
          id: 1,
          name: 'X-daCasa',
          href: '#',
          imageSrc: 'https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-em-pao-rustico-com-ia-generativa-de-batatas-fritas_188544-36959.jpg?w=1380&t=st=1702769150~exp=1702769750~hmac=f805ce230ea6b474cd145ac078a4895375bbc3ded1aab94ff64328c374d20614',
          imageAlt: "X-daCasa",
          price: 40,
        },
  ]

export default function Produtos() {
  return (
    <div className="bg-gray-100 mt-60">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Um pouco dos nossos lanches 😋</h2>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                  </div>
                  <div className="mt-4 flex justify-between">
                  <div>
                      <h3 className="text-sm text-gray-700">
                      <a href={product.href} className='font-semibold'>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                      </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">R$ {product.price}</p>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
