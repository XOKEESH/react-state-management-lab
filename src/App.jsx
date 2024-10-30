import { useState } from 'react'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mode, setMode] = useState('light')

  const handleDarkMode = () => {
    setIsDarkMode(true)
    console.log('Dark Mode!')
  }

  const handleLightMode = () => {
    setIsDarkMode(false)
    console.log('Light Mode!')
  }

  const [userInfo, setUserInfo] = useState({
    firstName: 'Kisha', 
    lastName: 'Martin',   
    hasPets: true,      
    age: 21
  })

  const handleMode = (modeValue) => {
    console.log(modeValue)
    setMode(modeValue)
  }

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className={mode}>
      <h1>Hello world!</h1>
      {/* <h1>User Information</h1>
      <p>First Name: {userInfo.firstName}</p>
      <p>Last Name: {userInfo.lastName}</p>
      <p>Has Pets: {userInfo.hasPets ? 'Yes' : 'No'}</p>
      <p>Age: {userInfo.age}</p> */}
      <p>Hello, my name is {userInfo.firstName} {userInfo.lastName}, I am {userInfo.age} years old, and I {userInfo.hasPets ? 'have pets.' : 'do not have pets.'}</p>
      
      <div>
      <button onClick={handleDarkMode}>Dark</button>
      <button onClick={handleLightMode}>Light</button>
      </div>
      
      <div>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
        <button onClick={() => handleMode('neon')}>Neon Mode</button>
        <button onClick={() => handleMode('night')}>Night Mode</button>
      </div>
    </div>
  </div>

  )
}

export default App;