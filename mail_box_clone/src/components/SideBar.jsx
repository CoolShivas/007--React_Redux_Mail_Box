import { RiInbox2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineDrafts } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";

const SideBar = () => {
    return (
        <div className="w-[15%]">
            {/* Starting of Compose button with Icon */}
            <div className="p-3">
                <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
                    <LuPencil size={"24px"} />
                    Compose
                </button>
            </div>
            {/* Ending of Compose button with Icon */}

            {/* Starting of Hard Coded Rest of the Button Icons with text */}
            <div className="text-gray-500">
                <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
                    <RiInbox2Fill size={"24px"} />
                    <p> Inbox </p>
                </div>
                <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
                    <IoIosStar size={"24px"} />
                    <p> Sent </p>
                </div>
                <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
                    <MdOutlineWatchLater size={"24px"} />
                    <p> Starred </p>
                </div>
                <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
                    <TbSend2 size={"24px"} />
                    <p> Snoozed </p>
                </div>
                <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
                    <MdOutlineDrafts size={"24px"} />
                    <p> Draft </p>
                </div>
                <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
                    <MdKeyboardArrowDown size={"24px"} />
                    <p> More </p>
                </div>

            </div>
            {/* Ending of Hard Coded Rest of the Button Icons with text */}

        </div>
    )
}

export default SideBar;