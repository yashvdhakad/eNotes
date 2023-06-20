"use client";
import Main from './components/Main'
import Navbar from './components/Navbar'
import NotesState from './context/NotesState'
// import Footer from './components/Footer'

export default function Home() {
  return (
    <NotesState>
      <div className="max-w-screen-xl h-screen m-auto">
        <Navbar />
        <Main />
        {/* <Footer /> */}
      </div>
    </NotesState>
  )
}
