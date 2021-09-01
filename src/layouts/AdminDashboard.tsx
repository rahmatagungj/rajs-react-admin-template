import React from "react";
import { Link } from "react-router-dom";
import { AdminNavLinks } from "../data/AdminNavLinks";

function AdminDashboard(props: any) {
  return (
    <main className="h-screen overflow-hidden relative">
      <div className="shadow-lg bg-base-200 drawer drawer-mobile h-screen">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content bg-gray-200">
          <header className="bg-gray-800 w-full h-14 flex items-center justify-between sticky top-0 z-50 shadow-sm sm:shadow-none p-2">
            <div className="block lg:hidden ml-3">
              <label
                htmlFor="my-drawer-2"
                className="cursor-pointer flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 text-md drawer-button lg:hidden"
              >
                <svg
                  width="22"
                  height="22"
                  className="text-gray-400 hover:text-gray-700"
                  fill="#ffffff"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </label>
            </div>
            <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
              <div className="relative p-2 flex items-center w-full space-x-4 justify-end">
                <div className="dropdown dropdown-end">
                  <button
                    className="flex items-center text-white dark:text-white text-sm"
                    tabIndex={0}
                  >
                    Rahmat Agung Julians
                    <svg
                      width="20"
                      height="20"
                      className="ml-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
                    </svg>
                  </button>
                  <ul className="shadow menu dropdown-content rounded w-52 text-black bg-gray-50">
                    <li className="text-black-700">
                      <a href="#help" className="focus:bg-gray-50">
                        Bantuan
                      </a>
                    </li>
                    <li className="text-red-700 focus:bg-gray-50">
                      <a href="#logout" className="focus:bg-gray-50">
                        Keluar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="p-5 overflow-x-hidden">{props.children}</div>
        </div>
        <div className="border-r-2 drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay" />
          <div className="menu p-4 overflow-y-auto w-72 bg-gray-50">
            <div className="flex justify-start pt-6 ml-8 flex-col">
              <p className="font-bold dark:text-white text-xl text-gray-700">
                APLIKASIKU
              </p>
              <p className="font-bold dark:text-white text-xs mt-2 text-gray-700">
                Nama Perusahaan
              </p>
            </div>
            <nav className="mt-6 border-t-2 border-fuchsia-600">
              <div>
                {AdminNavLinks.map((link, index) => (
                  <Link
                    className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start"
                    to={link.url}
                    key={index}
                  >
                    <span className="mx-2 text-sm font-normal">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;
