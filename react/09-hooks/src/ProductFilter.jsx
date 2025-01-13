import React, { useState, useMemo } from 'react';

const ProductFilter = () => {
    // 상품 가격 제한 상태 관리
    const [priceLimit, setPriceLimit] = useState('');

    const products = [
        { name: 'Product A', price: 30 },
        { name: 'Product B', price: 50 },
        { name: 'Product C', price: 70 },
    ];

    const filteredProducts = useMemo(() => {
        if (!priceLimit) {
            return products;
        }

        return products.filter((product) => {
            return product.price <= Number(priceLimit);
        });
    }, [priceLimit]);

    return (
        <div>
            <h2>Product Filter</h2>
            <input
                type='number'
                value={priceLimit}
                onChange={(e) => {
                    setPriceLimit(e.target.value);
                }}
                placeholder='Enter price limit'
            />
            <ul>
                {filteredProducts.map((product, idx) => {
                    return (
                        <li key={idx}>
                            {product.name}: {product.price}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductFilter;
