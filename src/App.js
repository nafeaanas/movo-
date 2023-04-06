import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import NotFound from './Screens/NotFound'
import MoviesPage from './Screens/Movies'
import SingleMovie from './Screens/SingleMovie'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/movie/:id' element={<SingleMovie/>} />
    </Routes>
  )
}

export default App