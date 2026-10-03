import React from 'react'

// Import the logo image
import Logo from '../../assets/Images/Logo.png'

// Import the Header CSS file
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>

      {/* Display the logo */}
      <img
        className='header_logo'
        src={Logo}
        alt='Header logo'
      />

      {/* Display the main Header title */}
      <h1 className='header_title'>
        Your Personal Investment Assistant
      </h1>

    </header>
  )
}