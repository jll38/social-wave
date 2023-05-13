import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  const currentPath = router.asPath;

  if (currentPath.startsWith("/user")) {
    // Render specific content for the /user subdirectory
    return (
      <>
        <Navbar fixed={true} />
        <main className="h-[90vh] flex justify-center align-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-400">Page Not Found</h1>
            <div className="italic">
              The user you are looking for either does not exist
            </div>
            <div>
              Return to{" "}
              <Link
                href="/"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Home
              </Link>{" "}
            </div>
          </div>
        </main>
      </>
    );
  }

  // Render the default 404 page for all other cases
  return (
    <>
      <Navbar fixed={true} />
      <main className="h-[90vh] flex justify-center align-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-400">Page Not Found</h1>
          <div className="italic">
            The user you are looking for either does not exist
          </div>
          <div>
            Return to{" "}
            <Link
              href="/"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Home
            </Link>{" "}
          </div>
        </div>
      </main>
    </>
  );
}
