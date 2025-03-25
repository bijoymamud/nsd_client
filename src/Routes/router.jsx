



// import { createBrowserRouter } from "react-router-dom";
// import Main from "../Layout/Main";
// import Home from "../Pages/Home/Home";
// import Register from "../Pages/Authentication/Register";
// import Login from "../Pages/Authentication/Login";
// import ForgetPassword from "../Pages/Authentication/ForgetPassword";
// import OTPVerification from "../Pages/Authentication/OTPVerification";
// import ResetPassword from "../Pages/Authentication/ResetPassword";
// import SuccessPage from "../Pages/Authentication/SuccessPage";

// // Dashboard Pages

// import Dashboard from "../Layout/Dashboard/Dashboard";
// import Admin_home from "../Layout/Dashboard/Admin_home";
// import UserManagment from "../Layout/Dashboard/UserManagment";
// import AddPrivacy from "../Layout/Dashboard/AddPrivacy";
// import AddTermsConditions from "../Layout/Dashboard/AddTermsConditions";
// import Faq from "../Pages/Home/Faq";
// import AddFaq from "../Layout/Dashboard/AddFaq";
// import User_home from "../Layout/Dashboard/User_home";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
//   {
//     path: "/registration",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/email_verification",
//     element: <ForgetPassword />,
//   },
//   {
//     path: "/verification",
//     element: <OTPVerification />,
//   },
//   {
//     path: "/reset_password",
//     element: <ResetPassword />,
//   },
//   {
//     path: "/success",
//     element: <SuccessPage />,
//   },

//   //admin 
//   {
//     path: "/dashboard",
//     element: <Dashboard />, 
//     children: [
//       {
//         path: "admin_home",
//         element: <Admin_home />, 
//       },
//       {
//         path: "user_managment",
//         element: <UserManagment/>
//       },
//       {
//         path: "privacy",
//         element: <AddPrivacy/>
//       },
//       {
//         path: "terms_conditions",
//         element: <AddTermsConditions/>
//       },
//       {
//         path: "faq",
//         element:<AddFaq/>
//       }
      
//     ],
//   },

//   //userDashboard
//   {
//       path: "/dashboard",
//       element: <Dashboard/>,
//       children: [
//         {
//           path: "user_home",
//           element: <User_home/>
//         }
//       ]
//   }
// ]);


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
import AdminHome from "../Layout/Dashboard/Admin_home";
import UserManagement from "../Layout/Dashboard/UserManagment";
import AddPrivacy from "../Layout/Dashboard/AddPrivacy";
import AddTermsConditions from "../Layout/Dashboard/AddTermsConditions";
import AddFaq from "../Layout/Dashboard/AddFaq";
import UserHome from "../Layout/Dashboard/User_home";
import CompanyProfile from "../Layout/Dashboard/CompanyProfile";
import FileManagment from "../Layout/Dashboard/FileManagment";

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

  // Admin Dashboard
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin_home", // Relative path: /dashboard/admin_home
        element: <AdminHome />,
      },
      {
        path: "user_management", // Fixed typo: "user_managment" -> "user_management"
        element: <UserManagement />,
      },
      {
        path: "privacy",
        element: <AddPrivacy />,
      },
      {
        path: "terms_conditions",
        element: <AddTermsConditions />,
      },
      {
        path: "faq",
        element: <AddFaq />,
      },
    ],
  },

  // User Dashboard
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "user_home", 
        element: <UserHome />,
      },
      {
        path: "file_managment",
        element: <FileManagment/>, 
      },
      {
        path: "company_profile",
        element: <CompanyProfile/>, // Placeholder; replace with actual component
      },
      // {
      //   path: "chatbot",
      //   element: <div>Chatbot Page</div>, // Placeholder; replace with actual component
      // },
    ],
  },
]);