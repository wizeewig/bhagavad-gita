import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Chapter from './components/Chapter';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
       <div>
       <Navbar/>
       <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/bhagavad-gita" element = {<Home/>}/>
          <Route exact path="/chapter-1" element = {<Chapter ch={1}/>}/>
          <Route exact path="/chapter-2" element = {<Chapter ch={2}/>}/>
          <Route exact path="/chapter-3" element = {<Chapter ch={3}/>}/>
          <Route exact path="/chapter-4" element = {<Chapter ch={4}/>}/>
          <Route exact path="/chapter-5" element = {<Chapter ch={5}/>}/>
          <Route exact path="/chapter-6" element = {<Chapter ch={6}/>}/>
          <Route exact path="/chapter-7" element = {<Chapter ch={7}/>}/>
          <Route exact path="/chapter-8" element = {<Chapter ch={8}/>}/>
          <Route exact path="/chapter-9" element = {<Chapter ch={9}/>}/>
          <Route exact path="/chapter-10" element = {<Chapter ch={10}/>}/>
          <Route exact path="/chapter-11" element = {<Chapter ch={11}/>}/>
          <Route exact path="/chapter-12" element = {<Chapter ch={12}/>}/>
          <Route exact path="/chapter-13" element = {<Chapter ch={13}/>}/>
          <Route exact path="/chapter-14" element = {<Chapter ch={14}/>}/>
          <Route exact path="/chapter-15" element = {<Chapter ch={15}/>}/>
          <Route exact path="/chapter-16" element = {<Chapter ch={16}/>}/>
          <Route exact path="/chapter-17" element = {<Chapter ch={17}/>}/>
          <Route exact path="/chapter-18" element = {<Chapter ch={18}/>}/>
        </Routes>
        <Footer/>
       </div>
       </Router>
  );
}

export default App;
