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
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import ForgetPassword from "../Pages/Authentication/ForgetPassword";
import OTPVerification from "../Pages/Authentication/OTPVerification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import SuccessPage from "../Pages/Authentication/SuccessPage";

// Dashboard Pages

import Dashboard from "../Layout/Dashboard/Dashboard";
import Admin_home from "../Layout/Dashboard/Admin_home";
import UserManagment from "../Layout/Dashboard/UserManagment";
import AddPrivacy from "../Layout/Dashboard/AddPrivacy";

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
    element: <Dashboard />, 
    children: [
      {
        path: "admin_home",
        element: <Admin_home />, 
      },
      {
        path: "user_managment",
        element: <UserManagment/>
      },
      {
        path: "privacy",
        element: <AddPrivacy/>
      }
      
    ],
  },
]);
