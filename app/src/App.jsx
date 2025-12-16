import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="app-wrap">
      <Navbar />
      <main className="app-main">
        {<Outlet/>}
      </main>
      <Footer/>
    </div>
  );
}
export default App;