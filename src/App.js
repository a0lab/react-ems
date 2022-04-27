import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path='/' element={<ListEmployee/>}></Route>
            <Route path='/employees' element={<ListEmployee/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
