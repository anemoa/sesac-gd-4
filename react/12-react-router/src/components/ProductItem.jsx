import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    const { id, name, email, body } = product;

    return (
        <div>
            <Link to={`/products/${id}`}>
                <ul>
                    <li>상품명 : {name}</li>
                    <li>상세설명 : {body}</li>
                </ul>
            </Link>
        </div>
    );
}