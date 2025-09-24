import React from 'react'
import Posts from './components/Posts'

function App() {
  return (
    <div className='bg-gray-900'>
      <header className='flex justify-between items-center bg-pink-900'>
        <p className='text-white m-2'>My Blog</p>
        <nav>
          <ul className=' flex *:m-2 text-white'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <Posts />
    </div>
  )
}

export default App
