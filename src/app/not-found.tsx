import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-8xl font-extrabold text-red-500">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-800">
        পেজটি খুঁজে পাওয়া যায়নি!
      </h2>

      <p className="mt-2 text-gray-500">
        দুঃখিত, তুমি যে পেজটি খুঁজছ সেটি পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        হোম পেজে ফিরে যাও
      </Link>
    </div>
  );
}
