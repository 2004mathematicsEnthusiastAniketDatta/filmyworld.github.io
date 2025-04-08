import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Search from './components/Search.jsx'
  
 const API_BASE_URL = 'https://api.themoviedb.org/3';
 
 const API_KEY = import.meta.env.VITE_MOVIE_TMDB_API_KEY;

 const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
 }
 
function App() {
   const [searchTerm, setSearchTerm] = useState('');
   const [errorMessage , setErrorMessage] = useState('');
    
   const fetchMovies = async () => {
     try {
       const endpoint = `${API_BASE_URL}/search/movie?query=${searchTerm}&language=en-US&include_adult=false`;
        const response = await fetch(endpoint, API_OPTIONS);
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
     } catch (error) {
      console.log(`error fetching movies: ${errorMessage}`);
      setErrorMessage(`Error fetching movies. Pleasev try again later.`);
     }
   }
   //API -> Application Programming Interface - a set of rules that allows one software aplication to interact with another
   useEffect((fetchMovies) => {
    fetchMovies();
   },[])

  return (
    <main>
      <div className='pattern' />
      <div className="wrapper">
          <header>
            <img src='../public/hero.png' alt='Hero Banner'/>
            <h1>Find <span className='text-gradient'>Movies</span>You'll Enjoy Without the Hassle</h1>
            <Search searchTerm={searchTerm} setSearchTerm ={setSearchTerm} />
          </header>
          <section className='movie-list'>

                <h2>All movies</h2>  
            
            
            
            
            
            
            
          </section> 
      </div>
    </main>
  )
}

export default App
