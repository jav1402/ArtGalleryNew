import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";




function App() {
  return (
    <div className="app-wrap">
      <Navbar />
      <main className="app-main">
        {<Outlet/>}
      </main>
    </div>
  );
}
export default App;


// <>
//   <Navbar />
//   <Outlet />
// </>
//  )
//  }

// export default App */}
