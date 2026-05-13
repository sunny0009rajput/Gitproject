import { useState } from 'react'
import Footer from './Footer'

import './App.css'
import TeamPage from './TeamPage'
import TeamPage2 from './TeamPage2'
import FilmStripScroll from './FilmScriptScroll'
import FilmStripScroll2 from './FilmScriptScroll2'
import TWFScrollAnimation from './TwfScrollanimation'
import TWFOriginalsScroll from './TwfOriginalsscroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Photography & Videography</h1>
      {/* <TeamPage/> */}
      <TeamPage2/>
      <FilmStripScroll/>
      <FilmStripScroll2/>
      <TWFScrollAnimation/>
      <TWFOriginalsScroll/>
      <Footer/>

    </>
  )
}

export default App
