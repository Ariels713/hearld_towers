import React from "react"
import Image from "next/image"
import hearldMenu from "../public/assets/hearldMenu.jpeg"

const images = [
  {
    src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
    alt: "Two each of gray, white, and black shirts laying flat.",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
    alt: "Model wearing plain black basic tee.",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
    alt: "Model wearing plain gray basic tee.",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
    alt: "Model wearing plain white basic tee.",
  },
]
function jackies() {
  return (
    <>
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            className="w-full h-full object-center object-cover"
            src={hearldMenu}
            alt="Launge Room at Hearld"
            layout="fill"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-72 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            A Playground for the Patrons
          </h1>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Social Room
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Jackie&apos;s Club
            </p>
            <p className="max-w-4xl mt-5 mx-auto text-xl text-gray-500">
              Through ever-unfolding intimate alcoves, and work nooks, the games
              room and bar lounge on the 25th floor open out onto the grandeur
              of the Main Room. Under an enormous wagon wheel chandelier, the
              seductive space invites social reprieve, featuring velvet modular
              seating, a large flatscreen TV, and lavish space to entertain.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <img
            src={images[3].src}
            alt={images[3].alt}
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default jackies
