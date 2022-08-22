import React, {useState} from 'react'
import Post from '../post/post'

const PostList = ({posts, deletePost}) => {
  return (
    <div>
      {
        posts.map(post => {
          return <Post {...post} key={post.id} deletePost={deletePost}/>
        })
      }
    </div>
  )
}

export default PostList