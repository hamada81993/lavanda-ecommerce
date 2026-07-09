import { Outlet } from "react-router-dom";
import Footer from "../sections/footer";
import Header from "../sections/Header";


export default function Layout() {
  return (
    <div className=" flex flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
