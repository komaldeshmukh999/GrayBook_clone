import './App.css'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav'
import Home from './pages/Home'

function App() {

  return (
    <>
   
      <div className="hero-section"> 
           <Nav />
            <Home />
      </div>
    
      <Footer/>
     
      
    </>
  )
}

export default App
