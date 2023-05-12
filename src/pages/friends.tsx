import React from "react";
import Navbar from "@/components/Navbar";
import { UserPicture } from "@/components/UserPicture";
export default function Friends(){
    return (
        <>
          <Navbar fixed={true}/>
          <main className="flex justify-between items-start mt-0 text-gray-700 px-4 md:px-0">
            <div className="border-2 mx-auto md:w-1/2 w-full rounded-md shadow-md">
                <div className="mx-auto flex justify-center align-bottom border-b-2">
                    <h1 className="text-4xl font-extrabold">Friends</h1>
                </div>
                <div className="p-10">
                    <div className="flex flex-row">
                        <UserPicture size={16} textSize={"2xl"}/>
                        <div className="pl-5 pt-1   text-md leading-5">
                            <div className="font-extrabold">First Last</div>
                            <div className="text-gray-400">@username</div>
                            <div className="text-green-600">Online</div>
                        </div>
                    </div>
                </div>
                <div className="p-10">
                    <div className="flex flex-row">
                        <UserPicture size={16} textSize={"2xl"}/>
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