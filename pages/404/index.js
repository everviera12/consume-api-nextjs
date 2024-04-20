import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="bg-stone-900 h-screen grid justify-center items-center">
      <div className="grid gap-5">
        <h1 className="text-2xl text-white font-semibold">Page Not Found</h1>
        <Link href={"/user"} className="inline-block text-yellow-500 relative overflow-hidden group">
          <div className="flex items-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#EAB308"></path>
              </svg>
            </span>
            <span>Back to home</span>
          </div>
        </Link>
      </div>
    </div>

  );
}
