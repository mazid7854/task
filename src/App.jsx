import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Collections from "./pages/Collections";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Upload from "./pages/Upload";
const App = () => {
  return (
    <>
      {/* main */}
      <main className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;
