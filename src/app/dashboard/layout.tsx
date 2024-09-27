import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({children}: {children: ReactNode}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Toaster richColors closeButton/>
            <footer className="bg-gray-800 py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-white text-lg font-semibold">About Us</h3>
                  <p className="text-gray-400 mt-2">
                    We are dedicated to empowering innovation through human and technology synergy.
                  </p>
                </div>

                <div className="mb-4 md:mb-0">
                  <h3 className="text-white text-lg font-semibold">Quick Links</h3>
                  <ul className="mt-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Home</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Blog</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Services</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold">Follow Us</h3>
                  <div className="flex justify-center md:justify-start mt-2">
                    <a href="#" className="text-gray-400 hover:text-white mx-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.25 3.435 9.625 8.062 11.156.593.109.813-.256.813-.569 0-.281-.009-1.193-.014-2.166-3.287.719-3.974-1.58-3.974-1.58-.537-1.366-1.308-1.733-1.308-1.733-1.063-.719.081-.703.081-.703 1.178.082 1.797 1.206 1.797 1.206 1.045 1.797 2.744 1.281 3.417.98.106-.756.409-1.281.744-1.577-2.61-.296-5.346-1.308-5.346-5.8 0-1.279.462-2.327 1.222-3.154-.123-.296-.53-1.5.115-3.126 0 0 1.003-.322 3.293 1.227a11.472 11.472 0 013.001-.404c1.022 0 2.056.137 3.016.396 2.29-1.553 3.292-1.227 3.292-1.227.645 1.626.238 2.83.117 3.126.762.827 1.22 1.875 1.22 3.154 0 4.502-2.742 5.5-5.356 5.794.42.362.793 1.079.793 2.183 0 1.577-.014 2.848-.014 3.228 0 .316.217.679.825.563C20.565 21.625 24 17.25 24 12 24 5.373 18.627 0 12 0z"/></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c6.628 0 12 5.372 12 12s-5.372 12-12 12S0 20.793 0 14.163 5.372 2.163 12 2.163zm0-2.163C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0z"/></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.25 3.435 9.625 8.062 11.156.593.109.813-.256.813-.569 0-.281-.009-1.193-.014-2.166-3.287.719-3.974-1.58-3.974-1.58-.537-1.366-1.308-1.733-1.308-1.733-1.063-.719.081-.703.081-.703 1.178.082 1.797 1.206 1.797 1.206 1.045 1.797 2.744 1.281 3.417.98.106-.756.409-1.281.744-1.577-2.61-.296-5.346-1.308-5.346-5.8 0-1.279.462-2.327 1.222-3.154-.123-.296-.53-1.5.115-3.126 0 0 1.003-.322 3.293 1.227a11.472 11.472 0 013.001-.404c1.022 0 2.056.137 3.016.396 2.29-1.553 3.292-1.227 3.292-1.227.645 1.626.238 2.83.117 3.126.762.827 1.22 1.875 1.22 3.154 0 4.502-2.742 5.5-5.356 5.794.42.362.793 1.079.793 2.183 0 1.577-.014 2.848-.014 3.228 0 .316.217.679.825.563C20.565 21.625 24 17.25 24 12 24 5.373 18.627 0 12 0z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
    )
}