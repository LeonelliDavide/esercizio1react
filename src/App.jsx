import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Home></Home>
      <div className='card_containerapp'>
      <About imageSrc="https://picsum.photos/300/200?random=1"/>
      <About imageSrc="https://picsum.photos/300/200?random=2"/>
      <About imageSrc="https://picsum.photos/300/200?random=3"/>
      <About imageSrc="https://picsum.photos/300/200?random=4"/>
      </div>
      <Footer></Footer>
    </div>
    
  )
}

export default App
