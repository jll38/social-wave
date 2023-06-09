import Link from "next/link";
import Image from "next/image";
import animations from "../styles/animations.module.css"
export default function Recover() {
  return (
    <main id="hero-screen">
      <Image src={"/images/700821.png"} alt="background img" fill={true} className={`absolute -z-10 ${animations.bob}`} />
      <div className="min-h-screen flex items-center justify-center object-center">
        <div className="text-center w-full sm:w-3/4 md:w-1/3 rounded-xl bg-white py-10 shadow-lg">
          <div id="login-box-header" className=" my-5">
            <h1 className="text-blue-400 text-6xl font-bold"><Link href="/">SocialWave</Link></h1>
            <p className="text-gray-500 text-lg">Ride the wave of connection</p>
          </div>
          <div id="login-box-body" className="text-left p-5">
            <form className="space-y-2 md:space-y-2" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500 ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@example.com"
                  required={true}
                />
              </div>
              
              <button
                type="submit"
                className="w-1/3 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Reset Password
              </button>
              <p className="text-sm font-light text-gray-500">
                Don&apos;t have an account yet?{" "}
                <Link
                  href="register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
              <p className="text-sm font-light text-gray-500">
                Return to {" "}
                <Link
                  href="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
