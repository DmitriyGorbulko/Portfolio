import './App.css';
import ErrorPage from './ErrorPage/ErrorPage';
import Form from './Form/Form';
import Header from './Header/Header';
import Home from './Home/Home';
import {BrowserRouter as Router, Routes, Route, BrowserRouter,} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
        <Router>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/form' element = {<Form/>}/>
            <Route path='*' element = {<ErrorPage/>}/>
          </Routes>
        </Router>  
    </div>



  );
}

export default App;
