import React from 'react';
import ProductsCard from './cardcomponent/ProductsCard';
import { Product } from '../type/product';

const ProductsPage = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products", {
        cache: 'no-store' 
    });

    const data: Product[] = await res.json();

    const increased = data
        .filter((item) => Number(item?.change?.pct ?? 0) > 0)
        .sort((a, b) => Number(b.change.pct) - Number(a.change.pct));

    const decreased = data
        .filter((item) => Number(item?.change?.pct ?? 0) < 0)
        .sort((a, b) => Number(a.change.pct) - Number(b.change.pct));

    const toBanglaNum = (num: number) => {
        return num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
    };

    return (
        <div className="p-4">
            {increased.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold my-9">
                        <span className="text-red-500">▲</span> আজ দাম বেড়েছে
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
                        {increased.slice(0, 6).map((item) => (
                            <ProductsCard key={item.id || item.slug} product={item} />
                        ))}
                    </div>
                </>
            )}

            {decreased.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold my-9">
                        <span className="text-green-500">▼</span> আজ দাম কমেছে
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
                        {decreased.slice(0, 6).map((item) => (
                            <ProductsCard key={item.id || item.slug} product={item} />
                        ))}
                    </div>
                </>
            )}

            <h2 className="text-2xl font-bold mt-9">সব পণ্য</h2>
            <p className="text-lg font-light text-gray-500 my-6">
                মোট {toBanglaNum(data.length)}টি পণ্য দেখানো হচ্ছে
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
                {data.map((item) => (
                    <ProductsCard key={item.id || item.slug} product={item} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;