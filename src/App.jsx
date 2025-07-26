// jai shree ganesh
import React from "react";
import Nav from "./components/Nav/Nav";
import MainRoutes from "./routes/MainRoutes";
import CustomCursor from "./components/globalComp/CustomCursor";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation()

  return (
    <>
   

    <MainRoutes/>

    <CustomCursor/>
   {!location.pathname.includes("/productinfo") && <Nav />}
   

    
    </>
  );
}

export default App;

