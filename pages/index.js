import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  const works = [
    {
      title: "Marco",
      downloadLink: "/3.png?download",
      imageUrl: "/3.png",
    },
    {
      title: "Pájaros",
      downloadLink: "/2.png?download",
      imageUrl: "/2.png",
    },
    {
      title: "La grandeza del Sol",
      downloadLink: "/1.png?download",
      imageUrl: "/1.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 lg:py-8 sm:py-6 py-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-center bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          Welcome to my portfolio.
        </h1>
      </div>

      {/* --- CONTAINER --- */}

      <div className="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              My Works
            </h2>
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {works.map((person) => (
              <li key={person.title}>
                <div className="space-y-4">
                  <div className="aspect-square">
                    <Image
                      className="aspect-square object-cover shadow-lg rounded-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.title}</h3>
                      <p className="text-indigo-600">
                        <a
                          href={person.downloadLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-pink-600 hover:from-indigo-700 hover:via-indigo-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Download
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
            <p className="text-center text-base text-gray-400">
              &copy; 2022 Matias La Mota. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
