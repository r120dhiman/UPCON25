import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Link } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import Committee from "./Pages/Committee";
import KeynoteSpeaker from "./Pages/KeyNoteSpeakers";
import TutorialSpeaker from "./Pages/TutorialSpeakers";
import PHDColloqium from "./Pages/PHDColloqium";
import Registration from "./components/Registeration";
import Callforpapers from "./Pages/Callforpapers";
import Contact from "./Pages/Contact";
import ResponsesClosed from "./Pages/ResponsesClosed";
import ScrollToTop from "./components/ScrollToTop";
import OurSuggestion from "./Pages/OurSuggestion";
import { Analytics } from "@vercel/analytics/react"
import Sponsers from "./Pages/Sponsers";
import Camera_ready from "./Pages/Camera_ready";
import Registration_Details from "./Pages/Registration_Details";

function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";
//15 nov for regular
  return (
    <>
      {showNavbar && <div className="sticky top-0 z-50"><Navbar color={true} backdrop={false} /> </div>}
      <ScrollToTop />
      <Analytics/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/camerareadyversion" element={<Camera_ready />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/speakers/keynote" element={<KeynoteSpeaker />} />
        <Route path="/speakers/tutorial" element={<TutorialSpeaker />} />
        <Route path="/phdcolloquium" element={<PHDColloqium />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/callforpapers" element={<Callforpapers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsors" element={<Sponsers />} />
        <Route path="/responses-closed" element={<ResponsesClosed />} />
        <Route path="/accomodation/our-suggestion" element={<OurSuggestion />} />
        <Route path="/registration-details" element={<Registration_Details />} />
      </Routes>
      <div className="fixed bottom-5 right-5 z-50">
       <Link
  to="/registration-details"
>
  <button className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition-all">
    Register Now
  </button>
</Link>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;