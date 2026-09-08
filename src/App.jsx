import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import MusicaInfo from "./pages/MusicaInfo";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/musicainfo" element={<MusicaInfo />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
