import { useState } from 'react'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [userInfo, setUserInfo] = useState({
    firstName: 'Kisha', 
    lastName: 'Martin',   
    hasPets: true,      
    age: 21
  })

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>Hello world!</h1>
      <h1>User Information</h1>
      <p>First Name: {userInfo.firstName}</p>
      <p>Last Name: {userInfo.lastName}</p>
      <p>Has Pets: {userInfo.hasPets ? 'Yes' : 'No'}</p>
      <p>Age: {userInfo.age}</p>

      <p>Hello, my name is {userInfo.firstName} {userInfo.lastName}, I am {userInfo.age} years old, and I {userInfo.hasPets ? 'have pets.' : 'do not have pets.'}</p>
    </div>

  )
}

export default App;