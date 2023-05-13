import React from "react";
import Image from "next/image";

interface UserPictureProps {
  size: number;
  img?: string;
  user?: string;
  textSize: string;
}

export function UserPicture({ size, img, user, textSize }: UserPictureProps) {
  const hasUser = user && user.length > 0;

  return (
    <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      {!img && !hasUser ? (
        <i className={`text-${textSize} text-gray-600 dark:text-gray-300 fa-solid fa-user`}>
          {/* Render specific content when user is not defined */}
        </i>
      ) : (
        <>
          {!img ? (
            <span className={`text-${textSize} text-gray-600 dark:text-gray-300`}>
              {hasUser && user![0]}
            </span>
          ) : (
            <Image src={img} className="object-cover" alt={user + "'s Picture"} width="100" height="100" />
          )}
        </>
      )}
    </div>
  );
}
