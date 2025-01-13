import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import axios from 'axios';



const HomeWork = () => {
	const [posts, setPosts] = useState([]);

	const fakePosts2 = async () => {
		try{
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
			setPosts(res.data);
			
		}catch (error){
			console.error(error);
		}
	}
	
	useEffect(() => {
		fakePosts2();
	}, [])

    return (
        <div>
            <PostList fakePosts={posts} />
        </div>
    );
};

export default HomeWork;
