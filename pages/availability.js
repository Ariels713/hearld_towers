import React from "react"
import Image from "next/image"
import Link from "next/link"
import availabilityImg from "../public/assets/availabilityImg.jpg"
const orders = [
  {
    products: [
      {
        id: 1,
        name: "Studio Residence",
        description:
          "Spacious Studio Apartment with beautiful views of the city. ",
        href: "#",
        price: "$3450",
        status: "Available",
        date: "January 5, 2021",
        datetime: "2021-01-05",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 2,
        name: "1 Bedroom Residence",
        description:
          "Spacious 1 Bedroom Apartment with beautiful views of the city. ",
        href: "#",
        price: "$4,200",
        status: "Under Contract",
        date: "January 5, 2021",
        datetime: "2021-01-05",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      // More products...
    ],
  },
]
function availability() {
  return (
    <>
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            className="w-full h-full object-center object-cover"
            src={availabilityImg}
            alt="Launge Room at Hearld"
            layout="fill"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-25"
        />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Availability at Herald Towers
          </h1>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 sm:px-6 sm:py-24">
          <div className="px-4 sm:px-0">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Available Units
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Please contact us if you have any questions are are interested in
              a showings.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="sr-only">Recent orders</h2>

            <div className="space-y-16 sm:space-y-24">
              {orders.map((order) => (
                <div key={order.number}>
                  <h3 className="sr-only">
                    Order placed on{" "}
                    <time dateTime={order.datetime}>{order.date}</time>
                  </h3>

                  <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                    <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                      {order.products.map((product) => (
                        <div key={product.id} className="flex py-6 sm:py-10">
                          <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                            <div className="lg:flex-1">
                              <div className="sm:flex">
                                <div>
                                  <h4 className="font-medium text-gray-900">
                                    {product.name}
                                  </h4>
                                  <p className="hidden mt-2 text-sm text-gray-500 sm:block">
                                    {product.description}
                                  </p>
                                </div>
                                <p className="mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6">
                                  {product.price}
                                </p>
                              </div>
                              <div className="mt-2 flex text-sm font-medium sm:mt-4">
                                <a
                                  href={product.href}
                                  className="text-indigo-600 hover:text-indigo-500"
                                >
                                  View Floor plan
                                </a>
                                <div className="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                                  <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-500"
                                  >
                                    Images
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="mt-6 font-medium">
                              {product.status}
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
                            <Image
                              src={availabilityImg}
                              alt={product.imageAlt}
                              width="200"
                              height="150"
                              className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default availability
