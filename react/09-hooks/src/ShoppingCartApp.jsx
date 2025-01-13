import React, { useState, useCallback, useEffect } from 'react';

const products = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
];

const ShoppingCartApp = () => {
    const [cart, setCart] = useState([]);

    const addToCart = useCallback((product) => {
        setCart((prevCart) => [
            ...prevCart,
            {
                id: product.id,
                name: product.name,
            },
        ]);
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCart((prevCart) =>
            prevCart.filter((item) => {
                return item.id !== productId;
            })
        );
    }, []);

    // addToCart 참조값 변경 여부 확인 [useEffect]
    useEffect(() => {
        console.log('addToCart');
    }, [addToCart]);

    // removeFromCart 참조값 변경 여부 확인 [useEffect]
    useEffect(() => {
        console.log('remove!');
    }, [removeFromCart]);
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((fruit) => {
                    return (
                        <li key={fruit.id}>
                            {fruit.name}
                            <button onClick={() => addToCart(fruit)}>
                                Add
                            </button>
                        </li>
                    );
                })}
            </ul>

            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name}{' '}
                            <button onClick={() => removeFromCart(item.id)}>
                                삭제
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ShoppingCartApp;
