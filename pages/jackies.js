import React from "react"
import Image from "next/image"
import jackies1 from "../public/assets/jackies/jackies1.jpg"
import jackies2 from "../public/assets/jackies/jackies2.jpg"
import jackies3 from "../public/assets/jackies/jackies3.jpg"
import jackies4 from "../public/assets/jackies/jackies4.jpg"

const faqs = [
  {
    question: "Get comfortable and stay awhile",
    answer:
      "Through ever-unfolding intimate alcoves, and work nooks, the games room and bar lounge on the 25th floor open out onto the grandeur of the Main Room. Under an enormous wagon wheel chandelier, the seductive space invites social reprieve, featuring velvet modular seating, a large flatscreen TV, and lavish space to entertain. ",
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
            src={jackies1}
            alt="Launge Room at Hearld"
            layout="fill"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-25"
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
            <h2 className="text-base font-semibold text-green-700 tracking-wide uppercase">
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
          <Image
            src={jackies2}
            layout="fill"
            alt=""
            className="w-full h-full object-center object-cover aspect-w-3 aspect-h-4"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <Image
              layout="fill"
              src={jackies3}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <Image
              layout="fill"
              src={jackies1}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <Image
            layout="fill"
            src={jackies4}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Jackie&apos;s Social Room
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Quick Fact: When Hotel McAlpin opened it was the largest hotel
                in the world.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default jackies
