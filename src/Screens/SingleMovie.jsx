import React from 'react'
import { useParams } from 'react-router-dom'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieCasts from '../Components/Single/MovieCasts'
import { Movies } from '../Data/MovieData'
import Layout from '../Layout/Layout'

function SingleMovie() {
    const {id} = useParams()
    const movie = Movies.find((movie) => movie.name === id)
  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className='container mx-auto min-h-screen px-2 my-6'>
        <MovieCasts/>
      </div>
    </Layout>
  )
}

export default SingleMovie