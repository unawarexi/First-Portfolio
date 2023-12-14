import './App.css'
import Contact from './components/Contact'
import Project from './components/Project'
import SideNav from './components/SideNav'
import Work from './components/Work'
import Home from './containers/Home'

function App() {

  return (
    <>
      <div>
        <SideNav />
        <Home />
        <Work />
        <Project />
        
        <Contact />
       
        
      </div>
        
    </>
  )
}

export default App
