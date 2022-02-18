import React from 'react'
import Logo from '../images/react-icon-large.png'

const Main = () => {
  return (
    <main>
      <h1 className="main-title">Fun facts about react</h1>
      <div className="div-img">
        <ul className="main-facts">
          <li>Was first release in 2013</li>
          <li>Was originall created by Jordan Walke</li>
          <li>Has well over 100k start on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of entrprise app, including mobile apps</li>
        </ul>
        <img src={Logo} alt="logo" />
      </div>
    </main>
  )
}

export default Main
