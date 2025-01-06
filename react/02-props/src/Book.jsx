import React from 'react';

const Book = ({ title, author, price, type }) => {
    // title, author, price, type
    return (
        <div className='book-layout'>
            <h1>이번주 베스트 셀러!!</h1>
            <img src='/book.jpg' alt='책이다' />
            <h2>{title}</h2>
            <p>저자: {author}</p>
            <p>판매가: {price}원</p>
            <p>구분: {type}</p>
        </div>
    );
};

export default Book;
