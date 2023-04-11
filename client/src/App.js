import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import NotFound from './Screens/NotFound'
import MoviesPage from './Screens/Movies'
import SingleMovie from './Screens/SingleMovie'
import WatchPage from './Screens/WatchPage'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Profile from './Screens/Dashboard/Profile'
import Aos from 'aos'
import Password from './Screens/Dashboard/Password'
import FavoritesMovies from './Screens/Dashboard/FavoritesMovies'
import MoviesList from './Screens/Dashboard/Admin/MovieList'
import Dashboard from './Screens/Dashboard/Admin/Dashboard'
import Categories from './Screens/Dashboard/Admin/Categories'
import Users from './Screens/Dashboard/Admin/Users'
import AddMovie from './Screens/Dashboard/Admin/AddMovie'

function App() {
  Aos.init();
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/movie/:id' element={<SingleMovie/>} />
      <Route path='/watch/:id' element={<WatchPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/password' element={<Password/>} />
      <Route path='/favorites' element={<FavoritesMovies/>} />
      <Route path='/movieslist' element={<MoviesList/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/addmovie' element={<AddMovie/>} />
    </Routes>
  )
}

export default App