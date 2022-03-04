import React from "react"

function MainSection() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">The New Classic</span>
            <span className="block">Start using Workflow today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-800">
            With a tip of the hat to New York style, Herald Towers, previously
            the famous Hotel McAlpin, has been restored and reimagined, fusing
            accents of old classic grandeur with immaculate, innovative
            residences.
          </p>
          <p className="mt-4 text-lg leading-6 text-gray-800">
            The striking renovations celebrate the best of New York’s history.
            With a nod to old school glamour and deco decadence, the amenities
            galore combines comfort and technology with a stroll down memory
            lane.
          </p>
        </div>
      </div>
    </>
  )
}

export default MainSection
