import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Movie from './components/Movie';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import "./App.css";
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Nav />
           <div className="App">
         
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/:Movie_id' element={< Movie />}></Route>
          </Routes>
          </div>
       </BrowserRouter>

    </div>
  );
}

export default App;