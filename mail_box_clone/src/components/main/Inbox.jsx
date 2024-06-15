import Messages from "./msg/Messages";
import { useState } from "react";
import { GoTag } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { MdCropSquare, MdInbox } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";


const mailTypes = [
    {
        icon: <MdInbox size={"20px"} />,
        text: "Primary"
    },
    {
        icon: <GoTag size={"20px"} />,
        text: "Promotion"
    },
    {
        icon: <FaUserFriends size={"20px"} />,
        text: "Social"
    },
];


const Inbox = () => {

    const [mailTypeSelected, setMailTypeSelected] = useState(0);

    return (
        <div className="flex-1 rounded-xl mx-5 bg-white">
            <div className="flex items-center justify-between px-4">

                {/* Starting of BODY Mid Section Right Side Icons (First-Row) */}
                <div className="flex items-center gap-2 text-gray-700 py-2">
                    <div className="flex items-center gap-1">
                        <MdCropSquare size={"20px"} />
                        <FaCaretDown size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdRefresh size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdMore size={"20px"} />
                    </div>
                </div>
                {/* Ending of BODY Mid Section Right Side Icons (First-Row) */}

            </div>

            {/* Starting of BODY Mid Section Right Side Icons (Seconde-Row) */}
            <div className="h-[10vh] overflow-y-auto">
                <div className="flex items-center gap-1">
                    {mailTypes.map((brr, index) => {
                        return <button
                            className={`${mailTypeSelected === index ? "border-b-4 border-b-blue-600 text-blue-600" : "border-b-4 border-b-transparent"} flex items-center gap-5 p-4 w-52 hover:bg-gray-100`}
                            onClick={() => setMailTypeSelected(index)}
                            key={index}>
                            {brr.icon}
                            <span> {brr.text} </span>
                        </button>
                    })}
                </div>
            </div>
            {/* Ending of BODY Mid Section Right Side Icons (Second-Row) */}

            {/* Startin of BODY Mid Section (Third-Row) Message Matter */}
            <Messages></Messages>
            {/* Ending of BODY Mid Section (Third-Row) Message Matter */}

        </div>
    )
}

export default Inbox;