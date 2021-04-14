import React from 'react';
import Row from './Row';
import Requests from './Requests';
import Banner from './Banner.js';
import Nav from './Nav'
import './App.css'

function App() {
  return (
        <div className="App">
          <Nav></Nav>
          <Banner></Banner>
          <Row title="NETFLIX ORIGINALS" fetchUrl={Requests.fetchNetflixOriginals} isLarge></Row>
          <Row title="Trending Now" fetchUrl={Requests.fetchTrending}></Row>
          <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
        </div>

  );
}

export default App;
