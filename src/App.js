import './App.css'
import UserProfile from './Components/UserProfile'

const userDetailsList = [
  {
    uniqueNo: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyed Miles',
    role: 'Web Developer',
  },
  {
    uniqueNo: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Pyhon Developer',
  },
  {
    uniqueNo: 3,
    imgUrl:
      'https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png',
    name: 'Devon Lane',
    role: 'SQL Developer',
  },
  {
    uniqueNo: 4,
    imgUrl:
      'https://as1.ftcdn.net/jpg/03/02/88/46/1000_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.webp',
    name: 'Robert Wills',
    role: 'Marketing Manager',
  },
]

function App() {
  return (
    <div className="background-container">
      <h1 className="heading">User Details</h1>
      <ul className="list-container">
        {userDetailsList.map(userDetails => (
          <UserProfile key={userDetails.uniqueNo} userDetails={userDetails} />
        ))}
      </ul>
    </div>
  )
}

export default App
