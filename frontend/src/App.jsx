import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router'
import Homepage from './Pages/Homepage'
import NotFound from './Pages/NotFound'
import TechnicalCommunity from './Pages/TechnicalCommittee'
import AdvisoryCommunity from './Pages/AdvisoryCommittee'
import OrganisingCommunity from './Pages/OrganisingCommittee'
function App() {
  return (
    <>
      <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/committee/Technical" element={<TechnicalCommunity/>}/>
      <Route path="/committee/advisory" element={<AdvisoryCommunity/>} />
      <Route path="/committee/organizing" element={<OrganisingCommunity/>} />
    </Routes>
    </BrowserRouter>
      <Footer />
    </>
  )
}
export default App
