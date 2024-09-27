import React from 'react'
import Navbar from '../Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../../Pages/Home'
import Footer from '../Footer/Footer'
import HomeRoute from './HomeRoute'
import MovieWrapper from '../Wrappers/movieWrapper/MovieWrapper'
import TvShowWrapper from '../Wrappers/tvshowWrapper/TvShowWrapper'
import MoviesList from '../../Pages/Movie_Pages/MoviesList'
import TvShowList from '../../Pages/TVShow_Pages /TVShowList'
import { SearchContextProvider } from '../../Context/SearchContext/SearchContext'
import SingleItem from '../../Pages/SIngle_Pages/SingleItem'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      {
        index: true,
        element: <SearchContextProvider> <Home /></SearchContextProvider>
      },
      {
        path: '/movies',
        element: <MovieWrapper />,
        children: [
          {
            path: ':id',
            element: <SingleItem/>
          },
          {
            index: true,
            element: <MoviesList />,
          }
        ]
      },
      {
        path: '/tvshows',
        element: <TvShowWrapper />,
        children: [
          {
            path: ':id',
            element: <div>Movie Details</div>
          },
          {
            index: true,
            element: <TvShowList />
          }
        ]
      }
    ]
  }
]);

const AllRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default AllRoutes
