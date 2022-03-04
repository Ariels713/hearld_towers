import { Fragment, useState } from "react"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import Image from "next/image"
import hearldLogo from "../../public/assets/hearldLogo.svg"
import hearldMenu from "../../public/assets/hearldMenu.jpeg"
import MenuIcon from "./MenuIcon"
import XIcon from "./XIcon"
import Link from "next/link"

const navigation = {
  categories: [
    {
      id: "amenities",
      name: "Amenities",
      featured: [
        {
          name: "Jackies Social Clubs",
          href: "#",
          imageSrc:
            "https://images.pexels.com/photos/276720/pexels-photo-276720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          imageAlt: "Social Club",
        },
      ],
      sections: [
        [
          {
            id: "Social-Room",
            name: "Social Rooms",
            items: [
              { name: "Jackie's Club", href: "/jackies" },
              { name: "Library Lounge", href: "/library" },
            ],
          },
          {
            id: "coffee-bar",
            name: "Sips & Bites",
            items: [{ name: "Sugar-Ray Cafe", href: "/rays" }],
          },
        ],
        [
          {
            id: "entertainment",
            name: "Entertainment",
            items: [{ name: "The Game Room", href: "/gaming" }],
          },
        ],
        [
          {
            id: "gym",
            name: "Fitness",
            items: [{ name: "The Gym", href: "/gym" }],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: "Residences", href: "/residences" },
    { name: "Neighborhood", href: "/neighborhood" },
    { name: "Availability", href: "/availability" },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-gray-600 border-gray-600"
                              : "text-gray-900 border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      <div className="space-y-4">
                        {category.featured.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden"
                          >
                            <img
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              className="object-center object-cover group-hover:opacity-75"
                            />

                            <div className="flex flex-col justify-end">
                              <div className="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                                <a
                                  href={item.href}
                                  className="font-medium text-gray-900"
                                >
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((column, columnIdx) => (
                        <div key={columnIdx} className="space-y-10">
                          {column.map((section) => (
                            <div key={section.name}>
                              <p
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className="font-medium text-gray-900"
                              >
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-2 p-2 block text-gray-500"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link href={page.href}>
                      <a
                        // href={page.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 py-6 px-4">
                <a
                  href="https://www.on-site.com/form_applications_updt.jsp?goal=6&attr=x20&property_id=90831&lease_id=0&unit_id=0&required="
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-300"
                >
                  <span className="mr-3 lg:flex text-sm font-medium text-gray-800">
                    Apply
                  </span>
                </a>
                <span className="sr-only">Apply</span>
                {/* <span className="block lg:flex mr-3 mb-2 text-sm font-medium text-gray-800">
                  212-736-5700
                </span>
                <span className="sr-only">212-736-5700</span> */}
                <Link href="/contactUs">
                  <a
                    type="button"
                    className="mt-4 block items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-200 bg-gray-800 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lg:inline-flex lg:items-center"
                  >
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8"
        >
          <div>
            <div className="h-16 flex items-center justify-between">
              <div className="flex-1 flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <a
                  href="#"
                  className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Search</span>
                  {/* <SearchIcon className="w-6 h-6" aria-hidden="true" /> */}
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "text-gray-600"
                                  : "text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium"
                              )}
                            >
                              {category.name}
                              <span
                                className={classNames(
                                  open ? "bg-gray-600" : "",
                                  "absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px"
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="grid grid-rows-1 grid-cols-2 gap-8 text-sm">
                                      {category.featured.map(
                                        (item, itemIdx) => (
                                          <div
                                            key={item.name}
                                            className={classNames(
                                              itemIdx === 0
                                                ? "col-span-2 aspect-w-2"
                                                : "",
                                              "group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden"
                                            )}
                                          >
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover group-hover:opacity-75"
                                            />

                                            <div className="flex flex-col justify-end">
                                              <div className="p-4 bg-white bg-opacity-60 text-sm">
                                                <a
                                                  href={item.href}
                                                  className="font-medium text-gray-900"
                                                >
                                                  <span
                                                    className="absolute inset-0"
                                                    aria-hidden="true"
                                                  />
                                                  {item.name}
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                    <div className="grid grid-cols-3 gap-y-10 gap-x-8 text-sm text-gray-500">
                                      {category.sections.map(
                                        (column, columnIdx) => (
                                          <div
                                            key={columnIdx}
                                            className="space-y-10"
                                          >
                                            {column.map((section) => (
                                              <div key={section.name}>
                                                <p
                                                  id={`${category.id}-${section.id}-heading`}
                                                  className="font-medium text-gray-900"
                                                >
                                                  {section.name}
                                                </p>
                                                <ul
                                                  role="list"
                                                  aria-labelledby={`${category.id}-${section.id}-heading`}
                                                  className="mt-4 space-y-4"
                                                >
                                                  {section.items.map((item) => (
                                                    <li
                                                      key={item.name}
                                                      className="flex"
                                                    >
                                                      <a
                                                        href={item.href}
                                                        className="hover:text-gray-800"
                                                      >
                                                        {item.name}
                                                      </a>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            ))}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link href={page.href} key={page.name}>
                      <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                        {page.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              {/* Logo */}
              <Link href="/">
                <a className="flex">
                  <span className="sr-only">Hearld Logo</span>
                  <Image
                    className="h-28 w-auto relative mt-80"
                    src={hearldLogo}
                    alt="Heard Building Logo"
                    width="200px"
                    height="119px"
                  />
                </a>
              </Link>

              <div className="flex-1 flex items-center justify-end">
                <a
                  href="https://www.on-site.com/form_applications_updt.jsp?goal=6&attr=x20&property_id=90831&lease_id=0&unit_id=0&required="
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-300"
                >
                  <span className="hidden mr-3 lg:flex text-sm font-medium text-gray-800">
                    Apply
                  </span>
                </a>
                <span className="sr-only">Apply</span>
                {/* <span className="hidden lg:flex mr-3  text-sm font-medium text-gray-800">
                  212-736-5700
                </span>
                <span className="sr-only">212-736-5700</span> */}
                <Link href="/contactUs">
                  <a
                    type="button"
                    className="hidden block items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-200 bg-gray-800 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lg:inline-flex lg:items-center"
                  >
                    Contact Us
                  </a>
                </Link>
                {/* <a
                  href="#"
                  className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
                ></a> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
