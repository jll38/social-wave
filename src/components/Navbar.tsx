import React from "react";
import Link from "next/link";
interface NavbarProps{
    fixed: boolean;
}
export default function Navbar({ fixed }: NavbarProps) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  const handleLogout = () => {

  };
  const user = "username";
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              SocialWave
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 pt-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                  href={`/user/${user}`}
                >
                  <span className="ml-2">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 pt-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/friends"
                >
                  <span className="ml-2">Friends</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 pt-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/feed"
                >
                  <span className="ml-2">Feed</span>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="px-3 pt-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={handleLogout}
                >
                  <span className="ml-2">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
