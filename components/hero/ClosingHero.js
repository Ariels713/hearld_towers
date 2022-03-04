export default function ClosingHero() {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src="https://images.pexels.com/photos/3889870/pexels-photo-3889870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="w-full h-96 object-center object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Closest Thing To Everything
          </h2>
          <p className="mt-4 text-gray-500">
            The epicenter of the action, in the heart of it all, Herald Towers
            is ideally located in Herald Square, one of the city’s most dynamic
            crossroads.
          </p>
        </div>

        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="divide-y-2 divide-gray-200">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Get in touch
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Hearld Towers
                    </h3>
                    <dl className="mt-2 text-base text-gray-500">
                      <div>
                        <dt className="sr-only">Address</dt>
                        <dd>50 West 34th Street</dd>
                        <dd>New York, NY 10001</dd>
                        <dd>P: 212.736.5700</dd>
                        <dd>E: leasing@heraldtowers.com</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Leasingn Office
                    </h3>
                    <dl className="mt-2 text-base text-gray-500">
                      <div>
                        <dt className="sr-only">Hours</dt>
                        <dd>5M-F: 10AM-6PM</dd>
                        <dd>SAT: 10AM-5:30PM</dd>
                        <dd>SUN: 11AM-4:30PM</dd>
                        <dd>*Last showing 30 minutes before closing</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Links
                    </h3>
                    <dl className="mt-2 text-base text-gray-500">
                      <div>
                        {/* <dt className="sr-only">Email</dt> */}
                        <dd>
                          {" "}
                          <a
                            href="https://www.on-site.com/form_applications_updt.jsp?goal=6&attr=x20&property_id=90831&lease_id=0&unit_id=0&required="
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-500 dark:text-gray-300"
                          >
                            <span className="mr-3 lg:flex text-sm font-medium text-gray-800">
                              Start Application
                            </span>
                          </a>
                        </dd>
                        <dd>
                          {" "}
                          <a
                            href="#"
                            // target="_blank"
                            // rel="noreferrer"
                            className="text-gray-400 hover:text-gray-500 dark:text-gray-300"
                          >
                            <span className="mr-3 lg:flex text-sm font-medium text-gray-800">
                              Accessibility
                            </span>
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Social
                    </h3>
                    <dl className="mt-2 text-base text-gray-500">
                      <div>
                        <dt className="sr-only">Say Hello</dt>
                        <dd>
                          <a
                            href="https://www.instagram.com/heraldtowersnyc/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-500 dark:text-gray-300"
                          >
                            <span className="mr-3 lg:flex text-sm font-medium text-gray-800">
                              Instagram
                            </span>
                          </a>
                        </dd>
                        <dd>
                          <a
                            href="https://www.facebook.com/heraldtowers"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-500 dark:text-gray-300"
                          >
                            <span className="mr-3 lg:flex text-sm font-medium text-gray-800">
                              Facebook
                            </span>
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
