import React from "react"
import Image from "next/image"
import availabilityImg from "../public/assets/availabilityImg.jpg"

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
            The New Classic
          </h1>
          <p className="mt-4 text-xl text-white">
            With a tip of the hat to New York style, Herald Towers, previously
            the famous Hotel McAlpin, has been restored and reimagined, fusing
            accents of old classic grandeur with immaculate, innovative
            residences.
          </p>
        </div>
      </div>
    </>
  )
}

export default availability
