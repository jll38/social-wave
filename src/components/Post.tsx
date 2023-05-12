import React from "react";
import { UserPicture } from "./UserPicture";

const handleLogout = () => {

};
export function Post({...props}) {
  return <div className="border-gray-100 border-2 rounded-md shadow-lg mx-4 px-10 pt-5 min-h-52 pb-6">
            <div className="h-20 border-b-2">
              <div className="relative">
                <div className="absolute top-2 flex items-center justify-center">
                <UserPicture size={16} user={"J"} textSize={"2xl"}/>
                </div>
              </div>
              <div className="relative top-5 left-20 leading-3">
                <div className="text-xl">{props.name}</div>
                <div className="text-md text-gray-400">{"@" + props.username}</div>
              </div>
            </div>
            <div className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="text-md text-gray-400">{props.date}</div>

            <div className="text-gray-600 mt-4">
              <ul className="flex gap-10">
                <li>
                  <button className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600" data-te-toggle="tooltip" title="Like">
                    <i className={"fa-regular fa-thumbs-up fa-flip-horizontal"}></i>
                  </button>
                </li>
                <li>
                  <button className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600" data-te-toggle="tooltip" title="Share">
                    <i className="fa-solid fa-share"></i>
                  </button>
                </li>
                <li>
                  <button className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600" data-te-toggle="tooltip" title="Repost">
                    <i className="fa-solid fa-rotate"></i>
                  </button>
                </li>
              </ul>
              <div className="mt-2 flex w-full">
                <form className="w-full">
                  <div className="relative ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                    <input type="text" id="commentInput" className="block w-full py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment" required autoComplete={"off"}/>
                    <button onClick={handleLogout} className="text-gray-600 absolute right-0 -bottom-0.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2">
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>;
}
  