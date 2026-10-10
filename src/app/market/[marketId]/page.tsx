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

  console.log("Market ID:", marketId);

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${marketId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Product data fetch failed");
  }

  const data: Product = await res.json();

  const change = data?.change;
  const pctValue = Number(change?.pct ?? 0);

  const isUp = pctValue > 0;
  const isZero = pctValue === 0;

  return (
    <div>
      <div className="flex justify-between p-3 rounded-2xl border border-gray-400 shadow mt-5">
  
      <div className="flex gap-3 items-center">
       <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-green-100 shadow-sm">
  <span className="text-7xl">
    {data.image}
  </span>
</div>
        <div className="grid gap-4">
          <h4 className="text-3xl font-bold text-black">
            {data.nameBn}
          </h4>

          <p className="text-xl font-medium text-gray-500">
            প্রতি {data.unit} {data.categoryNameBn}
          </p>
          {data.today > data.yesterday ? (
            <p className="text-red-500 font-medium text-lg">
              গতকালের তুলনায় আজ দাম বেড়েছে{" "}
              {data.today - data.yesterday} টাকা
            </p>
          ) : data.today < data.yesterday ? (
            <p className="text-emerald-600">
              গতকালের তুলনায় আজ দাম কমেছে{" "}
              {data.yesterday - data.today} টাকা
            </p>
          ) : (
            <p className="text-gray-500">
              গতকালের তুলনায় আজকের দাম অপরিবর্তিত রয়েছে
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-lg font-bold">
          আজকের দাম
        </p>

        <h2 className="text-3xl font-black text-black">
          {data.today}
        </h2>

        <p className="font-medium text-lg">
          টাকা / {data.unit}
        </p>
        <div
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
            isZero
              ? "bg-gray-100 text-gray-600"
              : isUp
              ? "bg-red-50 text-red-500"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          {!isZero && (
            <span className="text-[10px]">
              {isUp ? "▲" : "▼"}
            </span>
          )}

          <span>{pctValue}%</span>
        </div>
      </div>
    </div>
     <div>
  <Allmarket items={data.markets} />
     </div>

    
    </div>
  );
};

export default ProductDetailPage;