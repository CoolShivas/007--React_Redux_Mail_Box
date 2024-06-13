import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
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

            {/* Starting of Search Bar with Logo */}
            <div className="md:block hidden w-[50%] mr-60">
                <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
                    <IoIosSearch size={"24px"} className="text-gray-700" />
                    <input type="text"
                        placeholder="Search Mail"
                        className="rounded-full w-full bg-transparent outline-none px-1" />
                </div>
            </div>
            {/* Ending of Search Bar with Logo */}
        </div>
    )
}

export default Navbar;