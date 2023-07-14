import { UserPicture } from "./../components/UserPicture";
import { Post } from "./../components/Post";
import { FeedFriend } from "./../components/FeedFriend";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Feed() {
  const [general, setGeneral] = useState(true);
  return (
    <>
      <Navbar fixed={true}/>
      <main className="flex justify-between items-start md:px-32 mt-0 text-gray-700 h-[90vh]">
        <div className="hidden md:block w-72 border-gray-100 border-2 rounded-md shadow-lg bg-white">
          <div className="bg-blue-400 h-24 border-b-2 drop-shadow-none"></div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center ">
              <UserPicture
                size={84}
                textSize={"6xl"}
                img={"/images/istockphoto-1327592506-612x612.jpg"}
                user="Test"
              />
            </div>
          </div>
          <div className="p-5 text-center leading-8 mt-10">
            <div className="leading-4">
              <div>First Last</div>
              <div className="text-gray-400">@username</div>
              <div className="my-4 text-sm leading-3">
                This is a placeholder for the user bio
              </div>
            </div>
            <div className="flex justify-center bg-blue-400 rounded-2xl text-white">
              <div className="border-r pr-2 w-full">0 posts</div>
              <div className="border-l pl-2 w-full ">0 friends</div>
            </div>
          </div>
        </div>

        <div id="post-list" className="w-full lg:w-[70%] overflow-y-scroll h-[90vh]">
          <button
            id="post-button"
            className="fixed text-white bg-blue-400 hover:bg-blue-300 transition duration-150 ease-in-out rounded-full bottom-10 right-10 z-50 opacity-75 sm:opacity-100"
          >
            <i className="fa-sharp fa-solid fa-pen-to-square text-2xl sm:text-6xl px-6 py-5 sm:py-6"></i>
          </button>
          <div className="flex justify-center text-center px-4 h-12 mb-4 rounded-3xl overflow-hidden">
            {general ? (
              <button className="border-r border-gray-400 pr-2 w-full bg-gray-300 transition duration-150 ease-in-out">
                <div>General</div>
              </button>
            ) : (
              <button
                className="border-r border-gray-400 pr-2 w-full bg-gray-200 transition duration-150 ease-in-out"
                onClick={() => {
                  setGeneral(true);
                }}
              >
                <div>General</div>
              </button>
            )}
            {!general ? (
              <button className="border-l border-gray-400 pr-2 w-full bg-gray-300 transition duration-150 ease-in-out">
                <div>Friends</div>
              </button>
            ) : (
              <button
                className="border-l border-gray-400 pr-2 w-full bg-gray-200 transition duration-150 ease-in-out"
                onClick={() => {
                  setGeneral(false);
                }}
              >
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
          <Post
            id={0}
            name={"Julian Lechner"}
            username="jlucher"
            content=""
            date="May 12, 2023"
            likes={0}
          />
          <Post
            id={0}
            name={"Julian Lechner"}
            username="jlucher"
            content=""
            date="May 12, 2023"
            likes={0}
          />
          <Post
            id={0}
            name={"Julian Lechner"}
            username="jlucher"
            content=""
            date="May 12, 2023"
            likes={0}
          />
          <Post
            id={0}
            name={"Julian Lechner"}
            username="jlucher"
            content=""
            date="May 12, 2023"
            likes={0}
          />
          <Post
            id={0}
            name={"Julian Lechner"}
            username="jlucher"
            content=""
            date="May 12, 2023"
            likes={0}
          />
          <Post
            id={0}
            name={"Julian Lechner"}
            username="jlucher"
            content=""
            date="May 12, 2023"
            likes={0}
          />
        </div>

        <div className="hidden md:block w-[25%] border-gray-100 border-2 rounded-md shadow-lg bg-white">
          <div className="text-center h-20 border-b-2 text-3xl">Friends</div>
          <div className="w-full overflow-y-scroll h-52">
            <FeedFriend name="Julian Lechner" username="jlucher" online={true}/>
            <FeedFriend name="Julian Lechner" username="jlucher" online={false}/>
          </div>
        </div>
      </main>
    </>
  );
}
