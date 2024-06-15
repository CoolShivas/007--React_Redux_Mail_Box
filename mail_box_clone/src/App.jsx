import React from 'react';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Mail from "./components/Mail";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Navbar from "./components/shared/Navbar";



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
      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        <Navbar></Navbar>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App;