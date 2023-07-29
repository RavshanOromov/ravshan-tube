import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material' 
import { Main, Channel, Navbar, VideoDetail, Search } from '../'
import './app.css'


const App = () => {
  return (
 <Box>
    <Navbar />
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/channel' element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path='/search/:id' element={<Search />} />
    </Routes>
 </Box>
  )
}

export default App