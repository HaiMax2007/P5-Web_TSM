import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./routes/ErrorPage.jsx";
import Landing from "./routes/auth/landing.jsx";
import Login from "./routes/auth/Login.jsx";
import Register from "./routes/auth/Register.jsx";
import HomePage from "./routes/HomePage.jsx";
import ClassPage from "./routes/ClassPage.jsx";
import TeachersPage from "./routes/TeachersPage.jsx";

import Xtsm1 from "./routes/students/Xtsm1.jsx";
import Xtsm2 from "./routes/students/Xtsm2.jsx";
import XItsm1 from "./routes/students/XItsm1.jsx";
import XItsm2 from "./routes/students/XItsm2.jsx";
import XIItbsm1 from "./routes/students/XIItbsm1.jsx";
import XIItbsm2 from "./routes/students/XIItbsm2.jsx";
import XIItbsm3 from "./routes/students/XIItbsm3.jsx";

import "./styles/modern-normalize.css";
import "./styles/style.css";
import "./styles/components/login.css";
import "./styles/components/register.css";
import "./styles/components/errorPage.css";
import "./styles/components/landing.css";
import "./styles/components/home.css";
import "./styles/components/navBar.css";
import "./styles/components/footer.css";
import "./styles/components/teachers.css";
import "./styles/components/class.css";
import "./styles/components/students.css";
import "./styles/utils.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/home/kelas",
    element: <ClassPage />,
  },
  {
    path: "/home/guru",
    element: <TeachersPage />,
  },
  {
    path: "/home/kelas/xtsm1",
    element: <Xtsm1 />,
  },
  {
    path: "/home/kelas/xtsm2",
    element: <Xtsm2 />,
  },
  {
    path: "/home/kelas/xitsm1",
    element: <XItsm1 />,
  },
  {
    path: "/home/kelas/xitsm2",
    element: <XItsm2 />,
  },
  {
    path: "/home/kelas/xiitbsm1",
    element: <XIItbsm1 />,
  },
  {
    path: "/home/kelas/xiitbsm2",
    element: <XIItbsm2 />,
  },
  {
    path: "/home/kelas/xiitbsm3",
    element: <XIItbsm3 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
