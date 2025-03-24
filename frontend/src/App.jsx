import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router'
import Homepage from './Pages/Homepage'
import NotFound from './Pages/NotFound'
import TechnicalCommunity from './Pages/TechnicalCommunity'
import AdvisoryCommunity from './Pages/AdvisoryCommunity'
import OrganisingCommunity from './Pages/OrganisingCommunity'

function App() {
  return (
    <>
      <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/community/Technical" element={<TechnicalCommunity/>}/>
      <Route path="/community/advisory" element={<AdvisoryCommunity/>} />
      <Route path="/community/organizing" element={<OrganisingCommunity/>} />
    </Routes>
    </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
