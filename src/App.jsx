import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Protected from "./Protected/Protected";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useDispatch } from "react-redux";
import { login } from "./redux/features/authSlice";
import authServices from "./appwrite/auth";
import PublicRoute from "./Protected/PublicRouter";
import RTE from "./RTE/RTE";
import RTESample from "./RTE/RTESample";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/rte" element={<RTESample />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
        <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
        <Route
          path="/"
          element={
            <Protected>
              <Home/>
            </Protected>
          }
        />
        <Route path="/about" element={<Protected><About/></Protected>}/>
        <Route path="/contact" element={<Protected><Contact/></Protected>}/>
      </Route>
    )
  );


 const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadUser = async () => {
    try {
      const userData = await authServices.getCurrentUser();
      if (userData) {
        dispatch(login({ userData }));
      }
    } catch (error) {
      console.log("Session check failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  loadUser();
}, []);


  if (loading) return <div className="text-center text-2xl mt-20">Loading...</div>;

  return <RouterProvider router={router} />;
};

export default App;
