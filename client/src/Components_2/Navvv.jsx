import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navvv() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="space-y-4">
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-#f8f9fa-600 text-sm py-4" >
          <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
              <a className="flex-none text-xl font-semibold text-black titlee" href="#">Writo</a>
              <div className="sm:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-white/20 font-medium bg-blue-600 text-white shadow-sm align-middle hover:bg-/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-all text-sm"
                  onClick={toggleNavbar}
                  aria-controls="navbar-primary"
                  aria-label="Toggle navigation"
                  style={{ backgroundColor: 'green' }}
                >
                  <svg className={`${isOpen ? 'hidden' : 'block'} flex-shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                  <svg className={`${isOpen ? 'block' : 'hidden'} flex-shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>
            </div>
            <div id="navbar-primary" className={`${isOpen ? 'block' : 'hidden'} hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
            <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
  <Link className="font-semibold text-lg text-black hover:text-blue" to="/home" aria-current="page">Home</Link>
  <Link className="font-semibold text-lg text-black hover:text-blue" to="/community">Community</Link>
  <a className="font-semibold text-lg text-black hover:text-blue" href="#">Blogs</a>
  <a className="font-semibold text-lg text-black hover:text-blue" href="#">Mentors</a>
  <a className="font-semibold text-lg text-black hover:text-blue" href="#">Programs</a>
</div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
