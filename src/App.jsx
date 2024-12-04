import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'
import logo from './assets/logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons'
import Services from './Services'
import Home from './Home'
import Blog from './Blog'
import Booking from './Booking'
import AboutUs from './AboutUs'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleCLoseMenu = () => {
    setShowMenu(false)
  }


  return (
    <Router>
      <main className='w-360 bg-cream lg:w-full lg:px-10 '>
        <header className=' relative w-360 flex flex-row justify-between  items-center px-8 lg:px-0 '>
          <Link to="/">
            <img src={logo} alt='logo' className='h-16 w-16 lg:h-32 lg:w-32'/>
          </Link>
        
          <nav className={`${showMenu ? 'flex ' : 'hidden'} flex-col justify-center items-center absolute top-1 right-0 z-20 bg-dustyGreen w-360 px-1 h-72 rounded-2xl lg:flex lg:bg-transparent lg:h-12 `}>
            <button onClick={handleCLoseMenu}>
              <FontAwesomeIcon icon={faTimes} size='2x' color='#EEE7DD' />
            </button>
            <ul className='flex flex-col justify-around border border-black items-center text-cream text-xs w-80 h-56 rounded-3xl lg:text-dustyGreen lg:flex-row lg:relative lg:left-97.5 lg:top-4 lg:text-lg lg:w-800 lg:border-transparent '>
              <li><Link to='/' onClick={handleCLoseMenu}>Home</Link></li>
              <li><Link to='/services' onClick={handleCLoseMenu}>Services</Link></li>
              <li><Link to='/blog' onClick={handleCLoseMenu}>Blog</Link></li>
              <li><Link to='/booking' onClick={handleCLoseMenu}>Book an Appointment</Link></li>
              <li><Link to='/about' onClick={handleCLoseMenu}>About Us</Link></li>
            </ul>
          </nav>

          <button onClick={handleShowMenu} className='lg:hidden'>
            <FontAwesomeIcon icon={faBars} size='2x' color='#6F855A'/>
          </button>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/Booking' element={<Booking />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='*' element={<Navigate to='/' replace/>}/>

        </Routes>

     

        <footer className='flex flex-col justify-center items-center bg-black mt-4 -mb-8 p-8 lg:absolute lg:right-0 lg:left-0'>
      

          <div className='w-64 flex flex-row justify-between mb-4'>
            <FontAwesomeIcon icon={faFacebook} color='#6F855A'/>
            <FontAwesomeIcon icon={faTwitter} color='#6F855A'/>
            <FontAwesomeIcon icon={faInstagram} color='#6F855A'/>
            <FontAwesomeIcon icon={faTiktok} color='#6F855A'/>
            <FontAwesomeIcon icon={faPinterest} color='#6F855A'/>

          </div>
      
          <nav className='flex flex-col text-dustyGreen'>
            <Link to='/services' className='mb-2'>Services</Link>
            <Link to='/booking' className='mb-2'>Book an Appointment</Link>
            <Link to='/about' className='mb-2'>Contact us</Link>
          </nav>

          <h4 className='text-dustyGreen underline'>Skinova <FontAwesomeIcon icon={faCopyright} color='#6F855A'/></h4>

        </footer>

      </main>

    </Router>
    
  )
}

export default App
