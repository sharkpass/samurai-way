import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => { return (
  <div>
    My Posts
    <div>
      <textarea></textarea>
      <button>Add post</button>

    </div>
    <div className={s.posts}>
      <Post message='Hi, how are u?' likesCount='0' />
      <Post message='It is my first post' likesCount='15' />
      <Post message='WADAFAKA' likesCount='23' />
      </div>
    </div>
)}

export default MyPosts