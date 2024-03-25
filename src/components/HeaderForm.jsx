import React from 'react'
import '../components/style.css'

const header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <h1>Anonime</h1>
        <h3>Home</h3>
        <h3>List Anime</h3>
      </div>
      <input type="text" placeholder='Search anime or movie'/>
    </div>
  )
}

export default header