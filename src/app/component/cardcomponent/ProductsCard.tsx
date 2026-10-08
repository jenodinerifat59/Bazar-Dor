import React from 'react';
import { Product } from '@/app/type/product';
import Link from 'next/link';

interface ProductsCardProps {
    product: Product;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ product }) => {
    const change = product?.change;
    const pctValue = Number(change?.pct ?? 0);

    const isUp = pctValue > 0;
    const isZero = pctValue === 0;

    return (
        <div className="max-w-full p-4 bg-white rounded-2xl border border-gray-100 shadow-sm font-sans transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-gray-200">
            <Link href={`/market/${product.id}`}>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 border border-blue-400 border-dashed flex items-center justify-center overflow-hidden">
                    <span className="text-2xl">{product?.image || product?.categoryIcon || "📦"}</span>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">
                        {product?.nameBn}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                        {product?.unit}
                    </p>
                </div>
            </div>

            <p className="text-xs text-gray-400 font-medium mb-1">
                আজকের দাম
            </p>
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-gray-900">
                    {product?.today} <span className="text-base font-normal">টাকা</span>
                </div>

                <div
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isZero
                            ? "bg-gray-100 text-gray-600"
                            : isUp
                            ? "bg-red-50 text-red-500"
                            : "bg-emerald-50 text-emerald-600"
                    }`}
                >
                    {!isZero && (
                        <span className="text-[10px]">{isUp ? "▲" : "▼"}</span>
                    )}
                    <span>{pctValue}%</span>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default ProductsCard;