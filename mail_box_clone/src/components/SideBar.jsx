import { RiInbox2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineDrafts } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";



const sideBarItems = [
    {
        icons: <RiInbox2Fill size={"24px"} />,
        text: "Inbox"
    },
    {
        icons: <MdOutlineWatchLater size={"24px"} />,
        text: "Starred"
    },
    {
        icons: <TbSend2 size={"24px"} />,
        text: "Snoozed"
    },
    {
        icons: <IoIosStar size={"24px"} />,
        text: "Sent"
    },
    {
        icons: <MdOutlineDrafts size={"24px"} />,
        text: "Drafts"
    },
    {
        icons: <MdKeyboardArrowDown size={"24px"} />,
        text: "More"
    },
];



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

            {/* Starting of Rest of the Button Icons with text */}
            <div className="text-gray-500">

                {/* <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
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
                </div> */}


                {/* Starting of using map and rendering Button Icons with text  */}

                {sideBarItems.map((arr, index) => {
                    return <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2" key={index}>
                        {arr.icons} {arr.text}
                    </div>
                })}

                {/* Ending of using map and rendering Button Icons with text  */}


            </div>
            {/* Ending of Rest of the Button Icons with text */}

        </div>
    )
}

export default SideBar;