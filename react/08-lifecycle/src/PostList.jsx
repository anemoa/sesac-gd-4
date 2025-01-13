import React, { useEffect, useState } from 'react';

const PostList = ({ fakePosts }) => {
    console.log('fake >>>', fakePosts);

    const [post, setPost] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPost(fakePosts);
        }, 2000);
        return () => clearTimeout(timer);
    }, [fakePosts]);

    return (
        <div>
            {post.length > 0 ? (
                post.map((pos) => {
                    return (
                        <div key={pos.id}>
                            <p>{pos.title}</p>
                            <p>{pos.body}</p>
                        </div>
                    );
                })
            ) : (
                <div>로딩중</div>
            )}
        </div>
    );
};

export default PostList;
