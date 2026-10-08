import React from 'react';
import ProductsCard from './cardcomponent/ProductsCard';
import { Product } from '../type/product';

interface ProductsT{
    product : Product;


}

const ProductsPage = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products", {
        cache: 'no-store' 
    });
    const data:ProductsT[] = await res.json()
    const increased = data.filter((f) => f?.change?.pct > 0).sort((a, b) => b.change.pct - a.change.pct);
    const decreased = data.filter((f) => f?.change?.pct < 0).sort((a, b) => a.change.pct - b.change.pct);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold my-9"> <span className='text-red-500'>▲</span> আজ দাম বেড়েছে</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
                {increased.slice(0, 6).map((product) => (
                    <ProductsCard key={product.id} porduct={product} />
                ))}
            </div>
            <h2 className="text-2xl font-bold my-9 "><span className='text-green-500'>▼</span> আজ দাম কমেছে</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
                {decreased.slice(0, 6).map((product) => (
                    <ProductsCard key={product.id} porduct={product} />
                ))}
            </div>
                <h2 className="text-2xl font-bold mt-9 ">সব পণ্য</h2>
                <p className="text-lg font-light text-gray-500 my-6 ">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
                {data.slice(0, 33).map((product) => (
                    <ProductsCard key={product.id} porduct={product} />
                ))}
            </div>

        </div>
    );
};

export default ProductsPage;