import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function Users({ users }) {

  return (
    <>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Workflow</span>
                          <img
                            className="h-8 w-auto sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      ))}
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Log in
                      </a>
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                      >
                        Log in
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>{' '}
                <span className="block text-indigo-600 xl:inline">online business</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="max-w-7xl lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>

    <div className="bg-white lg:dark:bg-black lg:dark:text-white">
        Teste
    </div>
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
            <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Entire house</p>
            <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">Beach House in Collingwood</h2>
        </div>
        <div className="col-start-1 row-start-2 px-4 sm:pb-16">
            <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <svg width="20" height="20" fill="currentColor" className="text-violet-600">
                <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
            </svg>
            <div className="ml-1">
                <span className="text-black">4.94</span>
                <span className="sm:hidden md:inline">(128)</span>
            </div>
            <div className="text-base font-normal mx-2">·</div>
            <div>Collingwood, Ontario</div>
            </div>
            <hr className="w-16 border-gray-300 hidden sm:block"/>
        </div>
        <div className="col-start-1 row-start-3 space-y-3 px-4">
            <p className="flex items-center text-black text-sm font-medium">
            <img src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg&ga=GA1.2.1149860058.1620518400" alt="" className="w-6 h-6 rounded-full mr-2 bg-gray-100"/>
            Hosted by Kevin Francis
            </p>
            <button type="button" className="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg">Check availability</button>
        </div>
        <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
            <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
            <div className="relative col-span-3 row-span-2 md:col-span-2">
                <img src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg&ga=GA1.2.1149860058.1620518400" alt="" className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
            </div>
            <div className="relative hidden md:block">
                <img src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg&ga=GA1.2.1149860058.1620518400" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
            </div>
            <div className="relative hidden md:block">
                <img src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg&ga=GA1.2.1149860058.1620518400" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
            </div>
            </div>
        </div>
    </div>

    <div className="max-w-7xl mx-auto bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((person) => (
                <tr key={person.email}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{person.name}</div>
                        <div className="text-sm text-gray-500">{person.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{person.title}</div>
                    <div className="text-sm text-gray-500">{person.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`users/${person.id}`}>
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Ver
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export async function getServerSideProps() {
    const users = [
        {
            id: 1,
            name: 'Geison',
            title: 'Regional Paradigm Technician',
            department: 'Optimization',
            role: 'Admin',
            email: 'jane.cooper@example.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
            id: 2,
            name: 'Carlos',
            title: 'Regional Paradigm Technician',
            department: 'Optimization',
            role: 'Admin',
            email: 'jane.cooper@example.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
            id: 3,
            name: 'Jane Cooper',
            title: 'Regional Paradigm Technician',
            department: 'Optimization',
            role: 'Admin',
            email: 'jane.cooper@example.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
            id: 4,
            name: 'Jhon',
            title: 'Regional Paradigm Technician',
            department: 'Optimization',
            role: 'Admin',
            email: 'jane.cooper@example.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        }
    ];

    return {
      props: {
        users,
      },
    }
}

export default Users;