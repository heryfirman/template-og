import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import BottomNav from "../components/BottomNav"

const BaseLayout = () => {
  return (
    // <div className="gradient">
    <div className="bg-primary">
      <main>
        <div className="pattern" />
        <Outlet />
      </main>
      <footer className="text-white absolute w-full h-[84px] bottom-0 left-0">
        <div className="relative w-full h-[84px]">
          <BottomNav />
        </div>
      </footer>
    </div>
  )
}

export default BaseLayout
