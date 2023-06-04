import Navbar from "./components/navbar";
import {Route,Routes} from "react-router-dom";
import Contact from "./components/contact";
import Work from "./components/work";
import Timeline from "./components/timeline";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/timeline" element={<Timeline />}></Route>
      </Routes>
        <Footer />
    </>
  );
}

export default App;
