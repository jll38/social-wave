import React from "react";
import Navbar from "@/components/Navbar";
import { UserPicture } from "@/components/UserPicture";
export default function Friends() {
  const handleSendFriendRequest = () => {};
  return (
    <>
      <Navbar fixed={true} />
      <main className="flex justify-between items-start mt-0 text-gray-700 px-4 md:px-0">
        <div className="border-2 mx-auto md:w-1/2 w-full rounded-md shadow-md">
          <div className="mx-auto flex justify-center align-bottom border-b-2 border-gray-100">
            <h1 className="text-4xl font-extrabold">Friends</h1>
          </div>
          <div className="px-10 pt-5">
            <label className="block mb-2 font-bold text-gray-600 text-md">
              Add Friend
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="addFriend"
                id="addFriend"
                className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Enter Username"
                required={true}
              />
              <button
                type="submit"
                className="w-1/6 text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleSendFriendRequest}
              >
                Send
              </button>
            </div>
          </div>
          <div className="p-10">
            <div className="flex flex-row">
              <UserPicture size={16} textSize={"2xl"} />
              <div className="pl-5 pt-1   text-md leading-5">
                <div className="font-extrabold">First Last</div>
                <div className="text-gray-400">@username</div>
                <div className="text-green-600">Online</div>
              </div>
            </div>
          </div>
          <div className="p-10 pt-0">
            <div className="flex flex-row">
              <UserPicture size={16} textSize={"2xl"} />
              <div className="pl-5 pt-1   text-md leading-5">
                <div className="font-extrabold">First Last</div>
                <div className="text-gray-400">@username</div>
                <div className="text-gray-600">Offline</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
