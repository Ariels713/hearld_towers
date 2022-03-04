import React from "react"

function BodyCopy({ children, bgColor, textColor }) {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">A PLAYGROUND FOR THE PATRONS</span>
        </h2>
        <p className="block mt-4 text-lg leading-6 text-gray-800">
          With a playful celebration of recess and respite, Herald Towers spares
          no expense in the design and provisions of the building’s amenities.
        </p>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.on-site.com/form_applications_updt.jsp?goal=6&attr=x20&property_id=90831&lease_id=0&unit_id=0&required="
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-500"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyCopy
