import { BrowserRouter, Routes, Route, useLocation } from "react-router";
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

function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {showNavbar && <div className="sticky top-0 z-50"><Navbar color={true} backdrop={false} /> </div>}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/speakers/keynote" element={<KeynoteSpeaker />} />
        <Route path="/speakers/tutorial" element={<TutorialSpeaker />} />
        <Route path="/phdcolloquium" element={<PHDColloqium />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/callforpapers" element={<Callforpapers />} />
      </Routes>
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