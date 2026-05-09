import './UserCard.css'
import pic from '../assets/image.png'

const UserCard = (props) => {
  return (
    <div className="card">
        <h3 className='user-name'>{props.Name}</h3>
      <img className="user-image" src={pic} alt="user" />
      
      <p className='user-description'>Description of Aditya</p>
    </div>
  )
}

export default UserCard