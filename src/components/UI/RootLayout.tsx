import App from "../App";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ScrollToHashElement from "./ScrollToHashElement";

export default function RootLayout() {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <App />
      <Outlet />
    </>
  );
}
