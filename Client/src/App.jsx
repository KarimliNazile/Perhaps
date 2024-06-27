
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/Main'
import HomePage from './Pages/HomePage'
import About from './Pages/Aboutpage'                                                    

import Contact from './Pages/ContactPage'
import Drivers from './Pages/DriversPage'
import Gallery from './Pages/GalleryPage'




//hooks(icini doldur ilk olaraq) , context(icini yazandan sonra appi sarmalamalisann!!!) , basketpage , Carda da Add butonu elave etmeyi unutmayaq








function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/drivers'element={<Drivers/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
