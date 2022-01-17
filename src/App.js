// Made with love by SnowBit - https://snowbit.vercel.app/

import React from 'react'
import Feed from './components/Feed'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import data from './data/Data';

function App() {
  const posts = data.map(post => {
    return <Feed key={post.id} {...post} />
  })
  return (
    <div>
      <Nav />
      <div className="feed">
        {posts}
      </div>
    </div>
  )
}

export default App
