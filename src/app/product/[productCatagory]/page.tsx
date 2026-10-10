"use client";

import React, { useState, useEffect } from "react";
import ProductsCard from "@/app/component/cardcomponent/ProductsCard";
import { Product } from "@/app/type/product";

interface PageProps {
  params: Promise<{
    productCatagory: string;
  }>;
}

const ProductPage = ({ params }: PageProps) => {
  const { productCatagory } = React.use(params);

  const [data, setData] = useState<Product[]>([]);
  const [sortType, setSortType] = useState<"default" | "high" | "low">("default");

  useEffect(() => {
    fetch(
      `https://openapi.programming-hero.com/api/bazardor/products?category=${productCatagory}`
    )
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((err) => console.error(err));
  }, [productCatagory]);

  const sortedData = [...data].sort((a, b) => {
    const priceA = Number(a?.today ?? 0);
    const priceB = Number(b?.today ?? 0);

    if (sortType === "high") {
      return priceB - priceA; 
    }
    if (sortType === "low") {
      return priceA - priceB; 
    }
    return 0; // Default
  });

  const categoryName = data[0]?.categoryNameBn || "পণ্য তালিকা";
  const categoryIcon = data[0]?.categoryIcon || "📦";

  const toBanglaNum = (num: number) => {
    return num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
  };

  const getSortLabel = () => {
    if (sortType === "high") return "সর্বোচ্চ মূল্য";
    if (sortType === "low") return "সর্বনিম্ন মূল্য";
    return "ডিফল্ট";
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-6 border border-1 shadow border-gray-300 p-3 rounded-2xl justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-2xl">
            {categoryIcon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{categoryName}</h2>
            <p className="text-sm text-gray-500">
              {toBanglaNum(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            {getSortLabel()}
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm border border-gray-200"
          >
            <li>
              <button onClick={() => setSortType("default")}>ডিফল্ট</button>
            </li>
            <li>
              <button onClick={() => setSortType("high")}>
                সর্বোচ্চ মূল্য
              </button>
            </li>
            <li>
              <button onClick={() => setSortType("low")}>
                সর্বনিম্ন মূল্য
              </button>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-lg py-3 text-gray-500 font-medium">
        মোট {toBanglaNum(sortedData.length)} টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Dynamic Instant Sorted Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sortedData.map((product) => (
          <ProductsCard key={product.id || product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;