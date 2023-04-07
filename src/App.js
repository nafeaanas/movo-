import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import NotFound from './Screens/NotFound'
import MoviesPage from './Screens/Movies'
import SingleMovie from './Screens/SingleMovie'
import WatchPage from './Screens/WatchPage'
import Login from './Screens/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/movie/:id' element={<SingleMovie/>} />
      <Route path='/watch/:id' element={<WatchPage/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default App