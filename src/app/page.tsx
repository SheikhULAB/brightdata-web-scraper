import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center">
        <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
        <h1 className="text-3xl mt-2 text-black/50 font-bold mb-5 text-center">Welcome to Amazon Web Scraper</h1>
        <h2 className="text-lg italic text-center text-black/50">To learn how to code from zero experience, join Youtube University</h2>
        <h3 className="text-lg italic text-black/50 text-center">https://www.papareact.com/course</h3>
      </div>
  )
}
