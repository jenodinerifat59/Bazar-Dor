import React from "react";

interface MarketItem {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface AllmarketProps {
  items: MarketItem[];
}

const Allmarket = ({ items }: AllmarketProps) => {
  // সর্বনিম্ন দাম
  const lowestMarket = items.reduce((prev, current) =>
    current.min < prev.min ? current : prev
  );

  // সর্বাধিক দাম
  const highestMarket = items.reduce((prev, current) =>
    current.max > prev.max ? current : prev
  );

  // সব market-এর average
  const averagePrice =
    items.reduce((total, item) => {
      return total + (item.min + item.max) / 2;
    }, 0) / items.length;

  return (
    <div>
      <h2 className="my-4 text-3xl font-bold">
        দামের সারসংক্ষেপ
      </h2>
      <div className="grid grid-cols-3 gap-4">

        <div className="rounded-2xl border border-gray-200 p-5">
          <p>সর্বনিম্ন দাম</p>

          <p className="text-2xl font-bold text-green-700 py-3">
            {lowestMarket.min} টাকা
          </p>

          <p>সবচেয়ে কম দামের বাজার</p>
          <p className="font-semibold">
          </p>
        </div>

        <div className="rounded-2xl border  border-gray-200 p-5">
          <p>সর্বাধিক দাম</p>

          <p className="text-2xl font-bold text-red-700 py-3">
            {highestMarket.max} টাকা
          </p>

          <p>সবচেয়ে বেশি দামের বাজার</p>
          <p className="font-semibold">
          </p>
        </div>

   
        <div className="rounded-2xl border  border-gray-200 p-5">
          <p>গড় দাম</p>

          <p className="text-2xl font-bold text-green-700 py-3">
            {averagePrice.toFixed(2)} টাকা
          </p>

          <p>প্রতি কেজি-এর হিসাবে</p>
        </div>
      </div>

      <h2 className="my-4 text-3xl font-bold">
        বাজারভিত্তিক আজকের দাম
      </h2>

      {/* Market Table */}
      <div className="overflow-hidden rounded-2xl border">
       
        <div className="grid grid-cols-5 border-b bg-gray-100 p-3 px-4 font-semibold">
          <p>বাজার</p>
          <p>বিভাগ</p>
          <p>সর্বনিম্ন</p>
          <p>সর্বাধিক</p>
          <p>গড়</p>
        </div>

        {/* Rows */}
        {items.map((item, index) => {
          const average = (item.min + item.max) / 2;

          return (
            <div
              key={index}
              className="grid grid-cols-5 border-b p-3 px-4 last:border-b-0"
            >
              <p>{item.market}</p>
              <p>{item.division}</p>
              <p>{item.min}</p>
              <p>{item.max}</p>
              <p>{average}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allmarket;