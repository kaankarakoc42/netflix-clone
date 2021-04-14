import React,{useState,useEffect} from 'react';
import axios from './Axios';
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({title,fetchUrl,isLarge}){
  const [movies,setMovies] = useState([])
  
  useEffect(()=>{
    async function fetchData(){
          var request = await axios.get(fetchUrl);
          console.log(request.data.results)
          setMovies(request.data.results);
          return request
    }  
    fetchData();
  },[fetchUrl])
 
  return (
     <div className="Row">
         <h2>{title}</h2>
         <div className="rowPosters">
           {movies.map(movie=>(
               <img key={movie.id}
                src={`${baseUrl}${isLarge?movie.poster_path:movie.backdrop_path}`}
                alt={movie.name} 
                className={`rowPoster ${isLarge && "rowPosterLarge"}`}/>
           ))}
         </div>
     </div>
  );
}

export default Row;