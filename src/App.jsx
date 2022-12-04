import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/TopNavigationBar/TopNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from './pages/basket';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopNavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
