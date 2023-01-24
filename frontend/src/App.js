import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Index from './pages/Index'
import AboutPage from './pages/AboutPage'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';



function App() {
  return (
    <BrowserRouter>  
      <Header />
     
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
);
}

export default App;
