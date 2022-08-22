import React from 'react'
import styles from './post.module.css'
import Button from '../UI/button/button'

const Post = ({id, title, text, deletePost}) => {
  return (
    <div className={styles.post}>
      <div>
        <div className='post__title'>{title}</div>
        <p className='post__text'>{text}</p>
      </div>
      <Button type='button' onClick={() => deletePost(id)}>delete</Button>
    </div>
  )
}

export default Post