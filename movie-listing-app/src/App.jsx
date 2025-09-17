import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import SearchPage from './Pages/SearchPage'
import MoviePage from './Pages/MoviePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element = {<SearchPage />} /> 
        
        {/* Movie page */}
        <Route path='/movie/:id' element = {<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
