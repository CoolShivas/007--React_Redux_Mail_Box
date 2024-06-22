import { useEffect } from "react";
import AuthForm from "./components/auth/AuthForm";
import SendMail from "./components/pages/SendMail";
import React from 'react';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Mail from './components/main/Mail';
import Body from "./components/main/Body";
import Inbox from './components/main/Inbox';
import Navbar from './components/header/Navbar';
import { useSelector, useDispatch } from "react-redux";
import { setIsUserLogIn, setLogin } from "./components/store/reduxStore";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ]
  }
]);


const App = () => {

  const isUserLogIn = useSelector((store) => store.authen.isUserLogIn);

  const dispatch = useDispatch();

  // const userEmail = JSON.parse(localStorage.getItem("Save-Email"));
  // console.log(userEmail);

  let localToken = localStorage.getItem("Save-Token");

  useEffect(() => {

    if (localToken) {
      dispatch(setIsUserLogIn(true));
      dispatch(setLogin(localToken));
    }

  }, [localToken]);

  return (
    <>
      {!isUserLogIn ? (<AuthForm></AuthForm>) : (<div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        <Navbar></Navbar>
        <RouterProvider router={router}></RouterProvider>
        <div className="absolute w-[30%] right-20 z-10 bottom-0">
          <SendMail></SendMail>
        </div>
      </div>)}

    </>
  )
}

export default App;