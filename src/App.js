import "./App.css";
import Nevbar from "./Compantes/Nevbar/Nevbar";
import Home from "./Compantes/Home/Home";
import Movies from "./Compantes/Movies/Movies";
import People from "./Compantes/People/People";
import Tvshow from "./Compantes/Tvshow/Tvshow";
import About from "./Compantes/About/About";
import NetWorks from "./Compantes/NetWorks/NetWorks";
// import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesContextProvider from "./Compantes/MovieContext/MovieContext";
import Search from './Compantes/Search/Search';


function App() {

  // const aaa = async () =>{
  //   const forLOgApi = await axios.get("https://fakestoreapi.com/products");
  //   console.log(forLOgApi);
  // };

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
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
        <Search/>
      </MoviesContextProvider>
    </>
  );
}

export default App;
