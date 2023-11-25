import Navbar from './components/navBarComp/NavbarComp';
import HeroSection from './components/heroSection/HeroSection'
import './App.css';
import Section from './components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchNewAlbums } from './components/api/api';


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
  }, [])

  const {topAlbums =[], newAlbums=[]} = data;
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Section title='Top Albums' data={topAlbums} type='album' />
      <Section title='New Albums'data={newAlbums} type='album'/>
    </div>
  );
}

export default App;
