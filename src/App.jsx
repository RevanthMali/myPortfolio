import './App.css'
// import Main from './components/Main'
import Nav from './components/Navbar'
import Main from './components/Main'
import About from './components/AboutMe'
import Technology from './components/Technologies'
import Project from './components/Projects'
import Contact from './components/contact'
function App() {

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-purple-300 selection:text-gray-200"> 
      <div className="fixed top-0 -z-10  h-full w-full"> 
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> 
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      </div>
      <div className="container mx-auto px-8">
        <Nav/>
        <Main/>
        <About/>
        <Technology/> 
        <Project/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
