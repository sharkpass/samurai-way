import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
  return <div>
    <div>
      <img src='https://s-sd.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/animfon_1920_1031_jpg_0_100.jpg'></img>
    </div>
    <div className={s.item}>
      ava + description
    </div>
    <div>
    <MyPosts />
    </div>
  </div>
}

export default Profile;