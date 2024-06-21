import AuthForm from "./components/auth/AuthForm";
import SendMail from "./components/pages/SendMail";
import React from 'react';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Mail from './components/main/Mail';
import Body from "./components/main/Body";
import Inbox from './components/main/Inbox';
import Navbar from './components/header/Navbar';



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
  return (
    <>
      {/* <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        <Navbar></Navbar>
        <RouterProvider router={router}></RouterProvider>
        <div className="absolute w-[30%] right-20 z-10 bottom-0">
          <SendMail></SendMail>
        </div>
      </div> */}
      <AuthForm></AuthForm>
    </>
  )
}

export default App;