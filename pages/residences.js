import React from "react"
import Image from "next/image"
import hearld5 from "../public/assets/hearld5.jpg"
import Link from "next/link"
import MainSection from "../components/mainSection/MainSection"
import herald12 from "../public/assets/herald12.jpg"
const collections = [
  {
    name: "Beautiful Views",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/892618/pexels-photo-892618.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt: "Woman wearing an off-white cotton t-shirt.",
  },
  {
    name: "Modern Amenities",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt: "Man wearing a charcoal gray cotton t-shirt.",
  },
  {
    name: "Modern Kitchens",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
]
function residences() {
  return (
    <>
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            className="w-full h-full object-center object-cover"
            src={hearld5}
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
            Classic Spacious Residences
          </h1>

          <Link href="/availability">
            <a
              href="#"
              className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              View Availability
            </a>
          </Link>
        </div>
      </div>
      <MainSection />
      <div className="relative bg-white">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="hidden absolute inset-0 sm:flex sm:flex-col"
        >
          <div className="flex-1 relative w-full bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={herald12}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>

        <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="flex-1 relative w-full bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                {/* <Image
                  src={herald11}
                  alt=""
                  className="w-full h-full object-center object-cover"
                /> */}
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white h-48" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              INDULDGE IN OLD SCHOOL, LARGE LIVING.
            </h1>
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          className="-mt-96 relative sm:mt-0"
        >
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
              >
                <div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                      <img
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                    <div>
                      <p aria-hidden="true" className="text-sm text-white">
                        Herald Towers
                      </p>
                      <h3 className="mt-1 font-semibold text-white">
                        <a href={collection.href}>
                          <span className="absolute inset-0" />
                          {collection.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default residences
