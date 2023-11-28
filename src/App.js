import Navbar from './components/navBarComp/NavbarComp';
import HeroSection from './components/heroSection/HeroSection'
import './App.css';
import Section from './components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchNewAlbums, fetchNewSongs } from './components/api/api';


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
  }, [])

  const {topAlbums =[], newAlbums=[], Songs=[]} = data;
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Section title='Top Albums' data={topAlbums} type='album' />
      <Section title='New Albums'data={newAlbums} type='album'/>
      <br/>
      <Section title='Songs'data={Songs} type='song'/>
    </div>
  );
}

export default App;
