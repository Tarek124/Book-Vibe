import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="xl:p-0 p-2">
        <Outlet />
      </div>
    </div>
  );
}
