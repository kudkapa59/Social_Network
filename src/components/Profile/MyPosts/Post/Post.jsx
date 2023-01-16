import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return <div className={classes.item}>
    <img src='https://i.mimibazar.cz/h/bc/8/100225/20/h31142.jpg'></img>
    {props.message}
    <div>
      <span>Like</span> {props.likesCount}
    </div>
  </div>
}

export default Post;