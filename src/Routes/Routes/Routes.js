import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Login from "../../pages/Login/Login";
import SignUP from "../../SignUp/SignUP";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUP></SignUP>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            }
        ]
    },
])
export default router;
 