import Navbar from "./components/navbar";
import {Route,Routes} from "react-router-dom";
import Contact from "./components/contact";
import Work from "./components/work";
import Timeline from "./components/timeline";
import Footer from "./components/footer";
import Err404 from "./components/err404";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/timeline" element={<Timeline />}></Route>
        <Route path="*" element={<Err404 />}></Route>
      </Routes>
        <Footer />
    </>
  );
}

export default App;
