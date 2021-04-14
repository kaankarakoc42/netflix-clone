import React,{useState,useEffect} from 'react';
import Requests from './Requests'
import Axios from './Axios'
import './Banner.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Banner(){
    const [movie,setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData(){
           const request = await Axios.get(Requests.fetchNetflixOriginals)
           setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
           return request 
        }
        fetchData();
    },[])
    
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+'...' :str;
    }

    return (
      <header className="banner" style={{
          backgroundSize:"cover",
          backgroundImage:`url("${baseUrl}${movie?.backdrop_path}")`,
          backgroundPosition:"center center"
      }}>
          <div className="bannerContent">
              <h1 className="bannerTitle">{movie?.name||movie?.title||movie?.original_name}</h1>
              <div className="bannerButtons">
                  <button className="bannerButton">Play</button>
                  <button className="bannerButton">My list</button>
              </div>
              <h1 className="bannerDescription">
                  {truncate(movie?.overview,150)}
              </h1>
          </div>
          <div className="bannerFadeBottom"></div>
      </header>
  );
}

export default Banner;