import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home/Home';
import Pages from './pages/Pages/Pages';
import Watch from './pages/Watch/Watch';
import Marketplace from './pages/Marketplace/Marketplace';
import Groups from './pages/Groups/Groups';
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/watch" element={<Watch/>} />
            <Route path="/marketplace" element={<Marketplace/>} />
            <Route path="/groups" element={<Groups/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
