import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => 
    <Post message={post.message} key={post.id} likesCount={post.likesCount} />)

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return <div className={classes.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
      <div><button onClick={onAddPost}>Add post</button></div>
    </div>
    <div className={classes.posts}>
      {postsElements}
    </div>
  </div>
}

export default MyPosts;