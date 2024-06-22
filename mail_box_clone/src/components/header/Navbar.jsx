import Avatar from 'react-avatar';
import { PiDotsNineBold } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsUserLogIn, setLogout } from '../store/reduxStore';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const dispatch = useDispatch();

    const handlerOnLogOut = () => {
        dispatch(setIsUserLogIn(false));
        dispatch(setLogout({
            userToken: "",
            userEmail: null,
        }));
        localStorage.removeItem("Save-Token");
        localStorage.removeItem("Save-Email");
        console.log("User have Successfully Logged-Out");
    };

    return (
        <div className="flex items-center justify-between mx-3 h-16">
            {/* Starting of Logo and Heading with Humburger */}
            <div className="flex items-center gap-2">
                <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                    <RxHamburgerMenu size={"20px"} />
                </div>
                <img className="w-8" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail-logo" />
                <h1 className="text-2xl text-gray-500 font-medium"> Smail </h1>
            </div>
            {/* Ending of Logo and Heading with Humburger */}

            {/* Starting of Search Bar with Logo and added responsiveness according to mobile*/}
            <div className="md:block hidden w-[50%] mr-60">
                <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
                    <IoIosSearch size={"24px"} className="text-gray-700" />
                    <input type="text"
                        placeholder="Search Mail"
                        className="rounded-full w-full bg-transparent outline-none px-1" />
                </div>
            </div>
            {/* Ending of Search Bar with Logo and added responsiveness according to mobile*/}

            {/* Starting of Question, Setting and Triple Dots Logo */}
            <div className="md:block hidden">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <CiCircleQuestion size={"20px"} />
                    </div>

                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <CiSettings size={"20px"} />
                    </div>

                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <PiDotsNineBold size={"20px"} />
                    </div>
                    {/* Starting of Avatar for image icon on header's navbar */}
                    <div className="cursor-pointer">

                        <Avatar src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            size={"40px"}
                            round={true}
                            // onClick={() => setToggle((prevState) => !prevState)}
                            // The above event listener can we written as mention below ;
                            onClick={() => setToggle(!toggle)}
                        ></Avatar>

                        {toggle && (<button
                            className="btn btn-danger"
                            onClick={handlerOnLogOut}>
                            Logout
                        </button>)}

                    </div>
                    {/* Ending of Avatar for image icon on header's navbar */}
                </div>
            </div>
            {/* Ending of Question, Setting and Triple Dots Logo */}
        </div>
    )
}

export default Navbar;