import "./index.css";

import { Outlet } from "react-router-dom";
import AppHeader from "@/features/header/AppHeader.pages";
function App() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}

export default App;
