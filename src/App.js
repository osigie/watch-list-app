import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Add, Header, WatchList, Watched } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/add" element={<Add />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
