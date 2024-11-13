import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import About from "./features/About";
import ProductPage from "./features/ProductPage";
import Contact from "./features/Contact";
import Login from "./features/Login";
import Register from "./features/Register";
import { Cart } from "./features/Cart";
import CartContext from "./features/CartContext";
import AdminLayout from "./features/Admin/AdminLayout";
import Dashboard from "./features/Admin/Dashboard";
import { Protected, ProtectedAdmin } from "./features/hiddenlinks";

const routing = createBrowserRouter([
        {path:'/',element:<CartContext ><App/></CartContext>,
            children:[
                {path:'',element:<Home/>},
                {path:'about',element:<About/>},
                {path:'products',element:<Protected><ProductPage/></Protected>},
                {path:'contact',element:<Contact/>},
                {path:'login',element:<Login/>},
                {path:'register',element:<Register/>},
                {path:'cart',element:<Cart/>}
            ]
        },
        {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
            children:[
                {path:'',element:<Dashboard/>}
            ]
        }
])

export default routing