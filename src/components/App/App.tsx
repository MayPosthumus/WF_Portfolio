import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Home from "../home/home";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";
import SlotMachineApp from "../labo/slotMachine";

const Root = () => {    
    return (
        <div>
            <Header/>
            
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "",
                    element: <Home/>
                },
                {
                    path: "portfolio",
                    element: <Portfolio/>
                },
                {
                    path: "contact",
                    element: <Contact/>
                },
                {
                    path: "slotmachine",
                    element: <SlotMachineApp/>
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;  