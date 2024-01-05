import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import AllTvShows from './components/AllTvShows'
import AllMovies from './components/AllMovies'
import Details from './components/Details'
import SearchPage from './components/SearchPage'
import Footer from './components/footer'

function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='AllMovies' element = {<AllMovies/>} />
        <Route path='/AllTvShows' element={<AllTvShows />} />
        <Route path='/search/:searchQuery' element={<SearchPage />} />
        <Route path='/:media_type/:id' element = {<Details/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App