import React, {useState} from 'react'
import PostList from '../post-list/post-list'
import Tracker from '../tracker/tracker'
import PostForm from '../post-form/post-form'
import Select from '../UI/select/select'

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'qwe', text: 'kjefgkjfgr4 rhgjktr4hkghtr khk 5565645'},
    {id: 2, title: 'qasdggjghjgj', text: 'kjef rhgjktr4hkghtr khk 5565645'},
    {id: 3, title: 'zxcvbbn', text: 'kjefgkj'}
  ])

  const options = [
    {value: 'title', name: 'по заголовку'},
    {value: 'text', name: 'по тексту'},
  ]

  // сортировка
  const [sortBy, setSortBy] = useState('')

  const handlerSelect = (e) => setSortBy(e.target.value)

  const sort = (posts) => {
    if (sortBy === '') return posts

    return posts.sort((a, b) => {
      if (a[sortBy].length < b[sortBy].length) return -1
      if (a[sortBy].length > b[sortBy].length) return 1
      return 0
    })
  }

  // посты
  const deletePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  const addPost = (newPost) => setPosts((posts) => [...posts, newPost])

  const sortedPosts = sort(posts)

  return (
    <div className='app'>
      <PostForm addPost={addPost}/>
      <hr/>
      <h3>SORT</h3>
      <Select options={options} select={handlerSelect} defVal='сортировка по'/>
      <hr/>
      {
        sortedPosts.length
        ? <PostList posts={sortedPosts} deletePost={deletePost} />
        : <h1>нет постов</h1>
      }
      <Tracker />
    </div>
  )
}

export default App