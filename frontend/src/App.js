import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import WebFont from "webfontloader";
import react from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";

function App() {
  react.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
