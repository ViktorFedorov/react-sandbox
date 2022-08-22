import React, {useState} from 'react'
import Input from '../UI/input/input'
import Button from '../UI/button/button'

const PostForm = ({addPost}) => {
  const [post, setPost] = useState({
    title: '',
    text: ''
  })

  const handleChange = (e) => {
    setPost({
      ...post,
      title: e.target.value
    })
  }

  const handleChangeText = (e) => {
    setPost({
      ...post,
      text: e.target.value
    })
  }

  const handleAddPost = (e) => {
    e.preventDefault()

    const newPost = {
      ...post,
      id: Math.random() * 1000
    }

    addPost(newPost)

    setPost({
      title: '',
      text: ''
    })
  }

  return (
    <form action="" onSubmit={handleAddPost} className='forma'>
      <Input type='text' placeholder='title' value={post.title} onChange={handleChange}/>
      <Input type='text' placeholder='description' value={post.text} onChange={handleChangeText} />
      <Button type='submit'>Create</Button>
    </form>
  )
}

export default PostForm