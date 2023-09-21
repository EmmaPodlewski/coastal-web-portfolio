import App from "../App";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <App />
      <Outlet />
    </>
  );
}
