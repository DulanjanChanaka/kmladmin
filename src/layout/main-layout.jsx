import Navbar from "../components/navbar"

const { Outlet } = require("react-router-dom")

const MainLayout = ()=> {
    return (
        <div class='w-full grid grid-cols-[10%_90%]'>
            <div><Navbar/></div>
            <div class=' bg-blue-200 h-screen'><Outlet/></div>
            

        </div>
    )
}

export default MainLayout