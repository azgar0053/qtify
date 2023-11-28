import Navbar from './components/navBarComp/NavbarComp';
import HeroSection from './components/heroSection/HeroSection'
import './App.css';
import Section from './components/Section/Section';
import { useEffect, useState } from 'react';
import GenreTabs from './components/Genre/Genre'
import { fetchTopAlbums, fetchNewAlbums, fetchNewSongs, fetchGenre } from './components/api/api';


function App() {
  const [data, setData] = useState({});
  const getData =(key, source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return {...prevState, [key]:data}
      })
    })
  }

  useEffect(()=>{
    getData('topAlbums', fetchTopAlbums)
    getData('newAlbums', fetchNewAlbums)
    getData('Songs', fetchNewSongs)
    getData('genres', fetchGenre)
  }, [])

  const {topAlbums =[], newAlbums=[], Songs=[], genres=[]} = data;
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Section title='Top Albums' data={topAlbums} type='album' />
      <Section title='New Albums'data={newAlbums} type='album'/>
      <hr/>
      <GenreTabs title='Songs'data={Songs} type='song' genre={genres}/>
      <hr/>
    </div>
  );
}

export default App;
