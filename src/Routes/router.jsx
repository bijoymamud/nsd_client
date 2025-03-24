// import {createBrowserRouter} from "react-router-dom";
// import Main from "../Layout/Main";
// import Home from "../Pages/Home/Home";
// import Register from "../Pages/Authentication/Register";
// import Login from "../Pages/Authentication/Login";
// import ForgetPassword from "../Pages/Authentication/ForgetPassword";
// import OTPVerification from "../Pages/Authentication/OTPVerification";
// import ResetPassword from "../Pages/Authentication/ResetPassword";
// import SuccessPage from "../Pages/Authentication/SuccessPage";
  
// export const router = createBrowserRouter([
//     {
//       path: "/",
//         element: <Main />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home/>
//           }
//       ]
//     },
//     {
//       path: '/registration',
//       element: <Register/>
//     },
//     {
//       path: '/login',
//       element: <Login/>
//     },
//     {
//       path: '/email_verification',
//       element: <ForgetPassword/>
//     },
//     {
//       path: '/verification',
//       element: <OTPVerification/>
//     },
//     {
//       path: '/reset_password',
//       element: <ResetPassword/>
//     },
//     {
//       path: '/success',
//       element: <SuccessPage/>
//     }
//   ]);




import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DashboardLayout from "../Layout/DashboardLayout"; // New Dashboard Layout
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import ForgetPassword from "../Pages/Authentication/ForgetPassword";
import OTPVerification from "../Pages/Authentication/OTPVerification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import SuccessPage from "../Pages/Authentication/SuccessPage";

// Dashboard Pages
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Profile from "../Pages/Dashboard/Profile";
import Settings from "../Pages/Dashboard/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/registration",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/email_verification",
    element: <ForgetPassword />,
  },
  {
    path: "/verification",
    element: <OTPVerification />,
  },
  {
    path: "/reset_password",
    element: <ResetPassword />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />, 
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />, 
      }
      
    ],
  },
]);
