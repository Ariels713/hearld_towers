import React from "react"
import Image from "next/image"
import hearld6 from "../public/assets/hearld6.jpg"
import Link from "next/link"
const categories = [
  {
    name: "Museums",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/5825377/pexels-photo-5825377.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Convenient",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Entertainment",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]
function neighborhood() {
  return (
    <>
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            className="w-full h-full object-center object-cover"
            src={hearld6}
            alt="Launge Room at Hearld"
            layout="fill"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-25"
        />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-72 lg:px-0">
          <p className="tracking-light text-white font-light lg:text-2xl">
            Neighborhood
          </p>
          <h1 className="text-4xl font-extrabold tracking-light text-white lg:text-6xl">
            Herald Square
          </h1>
          <p className="mt-4 text-xl text-white">
            The epicenter of the action, in the heart of it all, Herald Towers
            is ideally located in Herald Square, one of the city’s most dynamic
            crossroads.
          </p>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Herald Square Living
            </h2>
            <Link href="/availability">
              <a
                href="#"
                className="hidden text-sm font-semibold text-green-700 hover:text-green-500 sm:block"
              >
                Availability<span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <img
                src="https://images.pexels.com/photos/162024/park-new-york-city-nyc-manhattan-162024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-center object-cover group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50"
              />
              <div className="p-6 flex items-end">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Parks
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-gray-800">
                    Madison Square Park
                  </p>
                </div>
              </div>
            </div>
            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
              <img
                src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="p-6 flex items-end sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Restaurants
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Boca
                  </p>
                </div>
              </div>
            </div>
            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
              <img
                src="https://images.pexels.com/photos/5699257/pexels-photo-5699257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="p-6 flex items-end sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Workspace
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <a
              href="#"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            The Neighborhood
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Humming with life, surrounded by flagships, eateries, and quieter
            landscaped retreats, the area buzzes with the city’s energy, your
            every want catered to, right on your doorstep.
          </p>

          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="group block"
              >
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default neighborhood
