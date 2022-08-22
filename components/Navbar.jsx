import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-indigo-600 to-pink-600">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-center border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
