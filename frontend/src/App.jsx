import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router'
import Homepage from './Pages/Homepage'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
      <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
