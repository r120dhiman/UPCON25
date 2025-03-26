import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router'
import Homepage from './Pages/Homepage'
import NotFound from './Pages/NotFound'
import TechnicalCommittee from './Pages/TechnicalCommittee'
import AdvisoryCommittee from './Pages/AdvisoryCommittee'
import OrganisingCommittee from './Pages/OrganisingCommittee'
import PublicityCommittee from './Pages/PublicityCommittee'
import SponsorshipCommittee from './Pages/SponsorshipCommittee'
import PlenaryCommittee from './Pages/PlenaryCommittee'
import HospitalityCommittee from './Pages/HospitalityCommittee'
import KeynoteSpeaker from './Pages/KeyNoteSpeakers'
import TutorialSpeaker from './Pages/TutorialSpeakers'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/committee/Technical" element={<TechnicalCommittee/>}/>
      <Route path="/committee/advisory" element={<AdvisoryCommittee/>} />
      <Route path="/committee/organizing" element={<OrganisingCommittee/>} />
      <Route path="/committee/publicity" element={<PublicityCommittee/>} />
      <Route path="/committee/sponsorship" element={<SponsorshipCommittee/>} />
      <Route path="/committee/plenary" element={<PlenaryCommittee/>} />
      <Route path="/committee/hospitality" element={<HospitalityCommittee/>} />
      <Route path="/speakers/keynote" element={<KeynoteSpeaker/>} />
      <Route path="/speakers/tutorial" element={<TutorialSpeaker/>} />
    </Routes>
    </BrowserRouter>
      <Footer />
    </>
  )
}
export default App