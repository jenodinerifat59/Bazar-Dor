"use client";

import { useEffect, useState } from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Product {
  id: number;
  categoryIcon: string;
  nameBn: string;
  today: number;
  unit: string;
  change?: {
    pct?: string;
    change?: number;
  };
}

export default function Marquee() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.api-store.workers.dev/api/bazardor/products"
        );
        const data = await res.json();

        const filtered = data
          ?.filter((item: Product) => Number(item.change?.pct) !== 0)
          ?.slice(0, 15);

        setProducts(filtered || []);
      } catch (error) {
        console.error("Data fetching error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#f3f4f6] border-y border-dashed border-gray-300 py-2">
      {/* speed সরিয়ে duration ব্যবহার করা হয়েছে */}
      <MarqueeText direction="right" duration={30} pauseOnHover={true}>
        <div className="flex items-center gap-6 pr-6">
          {products.map((item) => {
            const { categoryIcon, nameBn, today, unit, change } = item;
            const pctValue = Number(change?.pct ?? 0);
            const isUp = pctValue > 0;

            return (
              <div
                key={item.id}
                className="flex items-center gap-1.5 text-sm whitespace-nowrap"
              >
                <span>{categoryIcon}</span>
                <span className="font-medium text-gray-800 hover:underline cursor-pointer">
                  {nameBn}
                </span>

                <span className="font-semibold text-gray-900">{today} টাকা</span>
                <span className="text-gray-500 text-xs">/{unit}</span>

                <span
                  className={`flex items-center gap-0.5 ml-1 font-semibold text-xs ${
                    isUp ? "text-red-500" : "text-emerald-600"
                  }`}
                >
                  {isUp ? "▲" : "▼"} {change?.pct}%
                </span>
              </div>
            );
          })}
        </div>
      </MarqueeText>
    </div>
  );
}