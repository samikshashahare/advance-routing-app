import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Readposts.css';
import blogData from './../../configs/blog-data.json';

function Readposts() {
  const { id } = useParams();
  const [post, setpost] = useState({})

  useEffect(() => {
    blogData.forEach((post) => {
      if (post.id == id) {
        setpost(post);
      }
    })
  }, [id]);

  return (
    <div className='blog-container'>

      <h1 className='head-readpost'>Readposts</h1>

      <div className='blog-cards'>
        <h1 className='blog-title'>{post.title}💡</h1>
      <h2>👉By. {post.auther}</h2>
      <p>🔹{post.description}</p>
      <p>📔 {post.content}</p>
      </div>


    </div>

  )
}

export default Readposts