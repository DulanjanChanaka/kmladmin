import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import Orders from "../components/orders";
import Products from "../components/products";
import Shops from "../components/shops";
import MainStore from "../components/mainStore";
import Reports from "../components/reports";
import Employee from "../components/employee";



const route = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index:true,
                Component: Orders,
            },
            {
                path:"products",
                Component: Products,
            },
            {
                path:"shops",
                Component: Shops,
            },
            {
                path:"mainstore",
                Component: MainStore,
            },
            {
                path:"reports",
                Component: Reports,
            },
            {
                path:"employee",
                Component: Employee,
            },
        ]
    }
])

const MainRouter = ()=>{
    return <RouterProvider router={route}/>
}

export default MainRouter;