import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imgUrl, name, role} = userDetails

  return (
    <li className="list-card">
      <img src={imgUrl} className="image-prof" alt="user-data" />
      <div>
        <h1 className="name-heading">{name}</h1>
        <p className="details">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
