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

      <Routes>
        <Route path="/" element={<><Navbar /><Work /><Footer /></>}></Route>
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>}></Route>
        <Route path="/timeline" element={<><Navbar /><Timeline /><Footer /></>}></Route>
        <Route path="*" element={<Err404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
