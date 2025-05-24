import { Outlet } from "react-router";
import "../styles/App.css";
import NavBar from "./navigation/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
