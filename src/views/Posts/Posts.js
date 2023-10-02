import React from 'react'
import './Posts.css';
import blogData from './../../configs/blog-data.json'
import Previewpostcard from '../../componenets/Previewpostcard/Previewpostcard'

function Posts() {
  return (
    <div className='post-container'>
        <h1 className='heading-posts'>Posts</h1>
        <div >
        {
            blogData.map((Posts, index)=>{
                return <Previewpostcard key={index} 
                id={Posts.id} 
                title={Posts.title}
                 auther={Posts.auther}
                  description={Posts.description}
                   content={Posts.content} />
            } )
        }
        </div>
    </div>
  )
}

export default Posts