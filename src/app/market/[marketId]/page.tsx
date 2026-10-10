
import Allmarket from "@/app/component/Allmarket";
import { Product } from "@/app/type/product";
import React from "react";

interface PageProps {
  params: Promise<{
    marketId: string;
  }>;
}

const ProductDetailPage = async ({ params }: PageProps) => {
  const { marketId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${marketId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Product data fetch failed");
  }

  const data: Product = await res.json();

  const pctValue = Number(data?.change?.pct ?? 0);

  const isUp = pctValue > 0;
  const isZero = pctValue === 0;

  return (
    <main className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8">
      <div className="mt-5 flex flex-col gap-6 rounded-2xl border border-gray-300 bg-white p-4 shadow-md sm:p-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center self-center rounded-2xl bg-green-100 shadow-sm sm:h-32 sm:w-32 lg:h-40 lg:w-40">
            <span className="text-5xl sm:text-6xl lg:text-7xl">
              {data.image}
            </span>
          </div>

          {/* Product Name and Price Change */}
          <div className="grid min-w-0 gap-3 text-center sm:text-left">
            <h1 className="break-words text-2xl font-bold text-black sm:text-3xl">
              {data.nameBn}
            </h1>
            <p className="text-base font-medium text-gray-500 sm:text-lg">
              প্রতি {data.unit} {data.categoryNameBn}
            </p>
            {data.today > data.yesterday ? (
              <p className="text-sm font-medium text-red-500 sm:text-base">
                গতকালের তুলনায় আজ দাম বেড়েছে{" "}
                {data.today - data.yesterday} টাকা
              </p>
            ) : data.today < data.yesterday ? (
              <p className="text-sm font-medium text-emerald-600 sm:text-base">
                গতকালের তুলনায় আজ দাম কমেছে{" "}
                {data.yesterday - data.today} টাকা
              </p>
            ) : (
              <p className="text-sm font-medium text-gray-500 sm:text-base">
                গতকালের তুলনায় আজকের দাম অপরিবর্তিত রয়েছে
              </p>
            )}
          </div>
        </div>

        {/* Today's Price */}
        <div className="flex shrink-0 flex-col items-center rounded-xl bg-gray-50 p-4 sm:items-start sm:p-5 lg:min-w-48">
          <p className="text-base font-bold text-gray-700 sm:text-lg">
            আজকের দাম
          </p>

          <h2 className="mt-1 text-3xl font-black text-black sm:text-4xl">
            {data.today}
          </h2>

          <p className="mt-1 text-base font-medium text-gray-600">
            টাকা / {data.unit}
          </p>

          <div
            className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold ${
              isZero
                ? "bg-gray-100 text-gray-600"
                : isUp
                ? "bg-red-50 text-red-500"
                : "bg-emerald-50 text-emerald-600"
            }`}
          >
            {!isZero && (
              <span className="text-xs">
                {isUp ? "▲" : "▼"}
              </span>
            )}

            <span>
              {isUp ? "+" : ""}
              {pctValue}%
            </span>
          </div>
        </div>
      </div>
      <section className="mt-6">
        <Allmarket items={data.markets} />
      </section>
    </main>
  );
};

export default ProductDetailPage;
