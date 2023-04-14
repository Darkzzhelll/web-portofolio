import Projects from "./Project";
import Profile from "./assets/profile.png";
import { Disclosure, } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Projects", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-secondary1 hover:bg-secondary2 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 fill-secondary1" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 fill-secondary1" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden h-8 w-8 lg:block rounded-full object-cover"
                    src={Profile}
                    alt="Your Company"
                  />
                </div>
                <div className="block flex text-secondary1 font-medium items-center ml-3 lg:hidden">
                  <h1>Ryan Sutawijaya</h1>
                </div>
                <div className="hidden text-secondary1 font-medium items-center ml-3 lg:flex">
                  <h1>Ryan Sutawijaya</h1>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block items-center justify-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-secondary1 text-primary"
                          : "text-secondary2 hover:bg-secondary2 hover:text-primary",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                  <img
                    className="block h-8 w-8 rounded-full lg:hidden"
                    src={Profile}
                    alt="Your Company"
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                    ? "bg-secondary1 text-primary"
                    : "text-secondary2 hover:bg-secondary2 hover:text-primary",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   
  );
}
