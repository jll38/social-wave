import React from "react";
export function FeedFriend({...props}) {
  return <div className="p-2 flex">
              <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="text-xl text-gray-600 dark:text-gray-300">
                  {props.name[0]}
                </span>
              </div>
              <span className="relative flex h-3 w-3 -left-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div className="leading-4 relative top-2">
                <p>{props.name}</p>
                <p className="text-gray-400">{"@" + props.username}</p>
              </div>
            </div>;
}
  