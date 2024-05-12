import { Button } from "flowbite-react";
import { useNavigate } from 'react-router-dom'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useAuth } from "../../context/authContext";
import { Logout } from '../loginRegister/Logout';


const navigation = [
  { name: 'Principal', route: '/'},
  { name: 'Operarios', route: '/operators'},
  { name: 'Cerrar Sesión', route: 'logout'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navigation() {
  const { user } = useAuth()

  const navigate = useNavigate()

  const handleProtectedNavigation = (protectedRoute) => {
    try {
      navigate(protectedRoute)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Control Operarios"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {user ? navigation.map((item) => (
                      item.route === "logout" ? <Logout /> :
                      <Button 
                      onClick={() => handleProtectedNavigation(item.route)}
                      key={item.name}
                      color="dark"
                        aria-current={item.current ? 'page' : undefined}
                      >{item.name}</Button> 
                    )) : ""}
                  </div>
                </div>
              </div>
              {user ? <p className="text-sm text-white">{user.email}</p>: ""}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {user ? navigation.map((item) => (
                <button
                  key={item.name}
                  as="a"
                  onClick={() => handleProtectedNavigation(item.route)}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </button>
              )): ""}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

