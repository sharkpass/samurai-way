import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
  return(
    <div className={s.item}>
      <img src='https://i1.sndcdn.com/avatars-000327523111-q3tt87-t240x240.jpg'></img>
      {props.message }
    </div>
  );
}

export default Post;