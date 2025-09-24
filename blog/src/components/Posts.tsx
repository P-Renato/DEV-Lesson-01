import React, { useEffect, useState } from 'react'

interface Posts {
    id: number;
    title: string;
    body:string
}
function Posts() {
    const [posts, setPosts] = useState<Posts[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setPosts(json))
    })
  return (
    <div className='flex flex-wrap gap-4 p-10'>
      {posts.map((post) => (
        <div key={post.id} className='border rounded p-4 bg-gray-500 w-[23rem] '>
            <h3 className='font-bold mb-2'>{post.title}</h3>
            <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
