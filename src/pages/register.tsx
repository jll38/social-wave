import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FilmReel from "@/components/FilmReel";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import animations from "../styles/animations.module.css";
import { initializeApp, getApps } from "firebase/app";
import { setDoc, doc, getFirestore } from "firebase/firestore";

import { handleFirebaseLoginError } from "@/lib/handleErrors";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase";

const inter = Inter({ subsets: ["latin"] });
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Initialize the Firebase auth object
  const auth = getAuth();

  // Function to handle the signup
  const handleSignup = async (
    email: string,
    password: string,
    username: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // This will set displayName, Firebase only supports displayName and photoURL.
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      // Create a Firestore document for storing additional user information.
      const userDocument = {
        email,
        username,
        firstName,
        lastName,
      };
      await setDoc(doc(db, "users", userCredential.user.uid), userDocument);

      window.location.assign("/feed");
    } catch (error) {
      const firebaseError = error as FirebaseError;

      console.log(handleFirebaseLoginError(firebaseError));
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
      console.log(email);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "usernames") {
      setUsername(value);
    } else if (name === "fName") {
      setFirstName(value);
    } else if (name === "lName") {
      setLastName(value);
    }
  };
  return (
    <>
      <Head>
        <title>SocialWave</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="hero-screen">
        <Image
          src={"/images/700821.png"}
          alt="background img"
          fill={true}
          className={`absolute -z-10 ${animations.bob}`}
        />
        <div className="min-h-screen flex items-center justify-center object-center z-50">
          <div className="text-center w-full sm:w-3/4 md:w-1/3 rounded-xl bg-white py-10 shadow-lg">
            <div id="login-box-header" className=" my-5">
              <h1 className="text-blue-400 text-6xl font-bold">SocialWave</h1>
              <p className="text-gray-500 text-lg">
                Ride the wave of connection
              </p>
            </div>
            <div id="login-box-body" className="text-left p-5">
              <form className="space-y-2 md:space-y-2" action="#">
                <div className="flex justify-between">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500 ">
                      First name
                    </label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required={true}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-500 ">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required={true}
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-500 ">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required={true}
                    onChange={onChangeHandler}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-500 ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@example.com"
                    required={true}
                    onChange={onChangeHandler}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-500">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required={true}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required={true}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500">Remember me</label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-1/4 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() =>
                    handleSignup(email, password, username, firstName, lastName)
                  }
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
