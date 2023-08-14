import { Navbar, Home, Service, About, Project, Contact, Footer } from './components'
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home />
        <About/>
        <Service/>
        <Project/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
