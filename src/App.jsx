import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
        <h1>Introduction To React Router</h1>
        <Outlet />
      <Footer />
    </>
  );
}

export default App;
