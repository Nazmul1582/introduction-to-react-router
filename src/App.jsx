import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <h1>Introduction To React Router</h1>
      {navigation.state === "loading" ? <h1>Loading... </h1> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
