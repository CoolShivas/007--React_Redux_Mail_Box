import SideBar from "./components/SideBar";
import Navbar from "./components/shared/Navbar";


const App = () => {
  return (
    <>
      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        <Navbar></Navbar>
        <SideBar></SideBar>
      </div>
    </>
  )
}

export default App;