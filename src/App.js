import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./major_components/Navbar"
import Footer from "./major_components/Footer"
import Home from "./major_components/Home"
import CapybaraList from "./major_components/CapybaraList"
import UserCapybaraList from "./major_components/UserCapybaraList"
import Steps from "./major_components/Steps"
import Contact from "./major_components/ContactUs"
import Error from "./major_components/ErrorPage"
import "./App.css"
import Paginator from  "./components/Paginator"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/capybaras" element={<CapybaraList />} />
        <Route path="/my_capybaras" element={<UserCapybaraList />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/fetch" element={<Paginator />} />
        <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
  );
}

export default App;