import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto my-3 xl:p-0 p-4">
      <Navbar />
      <Outlet />
    </div>
  );
}
