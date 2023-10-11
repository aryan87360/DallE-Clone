import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import { logo } from './assets'
import {Home, CreatePost} from './pages'

const App = () => {
  return (
        <Router>

          <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
            <Link to="/">
              <img src={logo} alt="logo" className="w-28 object-contain" />
            </Link>

            <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
          </header>

          <main className ="sm:p-8 px-4 py-8 w-full bg-[#f9f8f3] min-h-[calc(100vh-73px)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-post" element={<CreatePost />} />
            </Routes>
          </main>

          <header className="w-full flex justify-center items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
              Made with ❤️ by &nbsp; <a href="https://www.linkedin.com/in/abhie16" target="_blank" rel="noreferrer" className="font-inter font-medium text-[#6469ff]">Abhishek Pandey</a>
          </header>
        </Router>
  )
}

export default App