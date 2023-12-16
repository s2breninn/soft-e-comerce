import React from 'react'

const products = [
    {
      id: 1,
      name: 'Hamburguer',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Hamburguer",
      price: 10,
    },
    {
        id: 1,
        name: 'X-Burguer',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "X-burguer",
        price: 17,
      },
      {
        id: 1,
        name: 'X-tudo',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "X-tudo",
        price: 25,
      },
      {
        id: 1,
        name: 'X-daCasa',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "X-daCasa",
        price: 40,
      },
      {
        id: 1,
        name: 'Hamburguer',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Hamburguer",
        price: 10,
      },
      {
          id: 1,
          name: 'X-Burguer',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "X-burguer",
          price: 17,
        },
        {
          id: 1,
          name: 'X-tudo',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "X-tudo",
          price: 25,
        },
        {
          id: 1,
          name: 'X-daCasa',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
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
