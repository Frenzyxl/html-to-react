import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Index from './pages/Index'
import AboutPage from './pages/AboutPage'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>  
      <Header />
     
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
);
}

export default App;
