import Home from '../pages/Home'
import Movie from '../pages/Movie'
import Search from '../pages/Search'
import Watch from '../pages/Watch'

const routerConfig = [
    {
        path: "/",
        index: true,
        element: <Home/>
    },
    {
        path: '/search',
        element: <Search/>
    },
    {
        path: '/movie/:id',
        element: <Movie/>
    },
    {
        path: '/movie/:id/watch',
        element: <Watch/>
    },
    
]

export default routerConfig