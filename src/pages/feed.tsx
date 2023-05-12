import Link from "next/link";

export default function Feed() {
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
          <div className="border-gray-100 border-2 rounded-md shadow-lg mx-4 px-10 pt-5 min-h-52 pb-6">
            <div className="h-20 border-b-2">
              <div className="relative">
                <div className="absolute top-2 flex items-center justify-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="text-xl text-gray-600 dark:text-gray-300">
                      FL
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative top-5 left-20 leading-3">
                <div className="text-xl">First Last</div>
                <div className="text-md text-gray-400">@username</div>
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="text-gray-600 mt-4">
              <ul className="flex gap-5">
                <li>Like</li>
                <li>Share</li>
                <li>Repost</li>
              </ul>
              <div className="mt-2 flex w-full">
                <form className="w-full">
                  <div className="relative ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      
                    </div>
                    <input
                      type="text"
                      id="commentInput"
                      className="block w-full py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Leave a comment"
                      required 
                    />
                    <button
                      type="submit"
                      className="text-gray-600 absolute right-0 -bottom-0.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 "
                    >
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="border-gray-100 border-2 rounded-md shadow-lg mx-4 px-10 pt-5 h-52"></div>
        </div>

        <div className="hidden md:block w-[20%] border-gray-100 border-2 rounded-md shadow-lg">
          <div>Friends</div>
        </div>
      </main>
    </>
  );
}
