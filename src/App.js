import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Services from "./pages/Services";
import PrivateRoute from "./authontication/PrivateRoute";
import About from "./pages/About";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        {/* <Route path="/services" element={<PrivateRoute>
          <Services></Services>
        </PrivateRoute>}></Route>

        <Route path="/about" element={<PrivateRoute>
         <About></About>
        </PrivateRoute>}></Route> */}

        <Route element={<PrivateRoute></PrivateRoute>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </Navbar>
  );
}

export default App;
