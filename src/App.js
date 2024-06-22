import "./App.css";
import Nevbar from "./Compantes/Nevbar/Nevbar";
import Home from "./Compantes/Home/Home";
import Movies from "./Compantes/Movies/Movies";
import People from "./Compantes/People/People";
import Tvshow from "./Compantes/Tvshow/Tvshow";
import About from "./Compantes/About/About";
import NetWorks from "./Compantes/NetWorks/NetWorks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesContextProvider from "./Compantes/MovieContext/MovieContext";
import Search from './Compantes/Search/Search';
import SingelMovie from './Compantes/SingelMovie/SingelMovie';
import Logging from "./Compantes/logging/Logging";

function App() {
  return (
    <>
      <MoviesContextProvider>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="Tvshow" element={<Tvshow />} />
          <Route path="People" element={<People />} />
          <Route path="About" element={<About />} />
          <Route path="NetWorks" element={<NetWorks />} />
          <Route path="/Home/:id" element={<SingelMovie />} />
          <Route path="/Search/:id" element={<SingelMovie />} />
          <Route path="*" element={<h1>not found</h1>} />
          <Route path="Search" element={<Search />} />
          <Route path="logging" element={<Logging />} />
        </Routes>
      </MoviesContextProvider>
    </>
  );
}

export default App;
