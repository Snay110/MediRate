import { Outlet } from "react-router-dom";
import AppHeader from "@/features/header/AppHeader.pages";
import "./index.css";

function App() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}

export default App;
