import React from "react"
import Image from "next/image"
import hearld2 from "../../public/assets/hearld2.jpg"
import Link from "next/link"
function SecondaryHero() {
  return (
    <div className="relative bg-gray-900">
      {/* Decorative image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          className="w-full h-full object-center object-cover"
          src={hearld2}
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
          CLASSIC SPACIOUS RESIDENCES
        </h1>
        <p className="mt-4 text-xl text-white">
          High ceilings, wide entryways, and oversized closets, the residences
          at Herald Towers maintain all the charisma of time-honored
          architecture, while full renovations snap apartments firmly into the
          now.
        </p>
        <Link href="/availability">
          <a className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">
            View Availability
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SecondaryHero
