import { Post } from "./../components/Post";
import { FeedFriend } from "./../components/FeedFriend";
import { useState } from "react";
import Link from "next/link";

export default function Feed() {
  const [general, setGeneral] = useState(true);
  return (
    <>
      <main className="flex justify-between items-start md:px-32 py-20 text-gray-700">
        <div className="hidden md:block w-72 border-gray-100 border-2 rounded-md shadow-lg">
          <div className="bg-blue-400 h-24 border-b-2 drop-shadow-none"></div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative inline-flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="text-3xl text-gray-600 dark:text-gray-300">
                  FL
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 text-center leading-8 mt-10">
            <div>First Last</div>
            <div>@username</div>
            <div>Bio</div>
            <div className="flex justify-center bg-blue-400 rounded-2xl text-white">
              <div className="border-r pr-2 w-full">0 posts</div>
              <div className="border-l pl-2 w-full ">0 friends</div>
            </div>
          </div>
        </div>

        <div id="post-list" className="w-full lg:w-[70%]">
          <button
            id="post-button"
            className="fixed bg-blue-400 hover:bg-blue-300 transition duration-150 ease-in-out rounded-full bottom-10 right-10 z-50 opacity-75 sm:opacity-100"
          >
            <i className="fa-sharp fa-solid fa-pen-to-square text-2xl sm:text-6xl px-6 py-5 sm:py-6"></i>
          </button>
          <div className="flex justify-center text-center px-4 h-12 mb-4 rounded-3xl overflow-hidden">
            {general ? (
              <button className="border-r border-gray-400 pr-2 w-full bg-gray-300 transition duration-150 ease-in-out">
                <div>General</div>
              </button>
            ) : (
              <button className="border-r border-gray-400 pr-2 w-full bg-gray-200 transition duration-150 ease-in-out" onClick={() => {setGeneral(true)}}>
                <div>General</div>
              </button>
            )}
            {!general ? (
              <button className="border-r border-gray-400 pr-2 w-full bg-gray-300 transition duration-150 ease-in-out">
                <div>Friends</div>
              </button>
            ) : (
              <button className="border-r border-gray-400 pr-2 w-full bg-gray-200 transition duration-150 ease-in-out" onClick={() => {setGeneral(false)}}>
                <div>Friends</div>
              </button>
            )}
          </div>
          <Post
            id={0}
            name={"Julian Lechner"}
            username="jlucher"
            content=""
            date="May 12, 2023"
            likes={0}
          />
          <div className="border-gray-100 border-2 rounded-md shadow-lg mx-4 px-10 pt-5 h-52"></div>
        </div>

        <div className="hidden md:block w-[25%] border-gray-100 border-2 rounded-md shadow-lg">
          <div className="text-center h-20 border-b-2 text-3xl">Friends</div>
          <div className="w-full overflow-y-scroll h-52">
            <FeedFriend name="Julian Lechner" username="jlucher" />
          </div>
        </div>
      </main>
    </>
  );
}
