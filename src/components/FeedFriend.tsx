import React from "react";
import { UserPicture } from "./UserPicture";
export function FeedFriend({ ...props }) {
  return (
    <div className="p-2 flex">
      <UserPicture size={42} user={""} textSize={"md"} />
      {props.online ? (
        <span className="relative flex h-3 w-3 -left-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      ) : (
        <span className="relative flex h-3 w-3 -left-3"></span>
      )}
      <div className="leading-4 relative top-2">
        <p>{props.name}</p>
        <p className="text-gray-400">{"@" + props.username}</p>
      </div>
    </div>
  );
}
