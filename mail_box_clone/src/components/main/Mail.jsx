import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineAddTask, MdOutlineDriveFileMove } from "react-icons/md";
import { MdOutlineMarkEmailUnread, MdOutlineWatchLater } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineReport } from "react-icons/md";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";

const Mail = () => {
    return (
        <div className="flex-1 bg-white rounded-xl mx-5 bg-yellow-300">
            <div className="flex items-center justify-between px-4 bg-green-300">

                <div className="flex items-center gap-2 text-gray-700 py-2 bg-blue-300">
                    {/* Starting of BODY Mid Section Right Side Icons (First-Row) */}
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdArrowBack size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <BiArchiveIn size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineReport size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdDeleteOutline size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineMarkEmailUnread size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineWatchLater size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineAddTask size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineDriveFileMove size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdMore size={"20px"} />
                    </div>
                    {/* Ending of BODY Mid Section Right Side Icons (First-Row) */}

                </div>

                {/* Starting of BODY Mid Section Left Side Icons (First-Row) */}
                <div className="flex-end">
                    <button className="hover:rounded-full hover:bg-gray-200"> <MdKeyboardArrowLeft size={"24px"} /> </button>
                    <button className="hover:rounded-full hover:bg-gray-200"> <MdKeyboardArrowRight size={"24px"} /> </button>
                </div>
                {/* Ending of BODY Mid Section Left Side Icons (First-Row) */}

            </div>

            <div className="h-[90vh] overflow-y-auto p-4">
                {/* Starting of BODY Mid Section Right Side Icons (Second-Row) */}
                <div className="flex items-center justify-between bg-white gap-1">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-medium"> Subject </h1>
                        <span className="text-sm bg-gray-200 rounded-md px-2"> inbox </span>
                    </div>
                    {/* Starting of BODY Mid Section Left Side Icons (Second-Row) */}
                    <div className="flex-none text-gray-400 my-5 text-sm">
                        <p>12-08-2024</p>
                    </div>
                    {/* Ending of BODY Mid Section Left Side Icons (Second-Row) */}
                </div>
                {/* Ending of BODY Mid Section Right Side Icons (Second-Row) */}

                {/* Starting of BODY Mid Section Right Side (Third-Row) */}
                <div className="text-gray-500 text-sm">
                    <h1> shiva@gmail.com </h1>
                    <span> to me </span>
                </div>
                {/* Ending of BODY Mid Section Right Side (Third-Row) */}

                {/* Starting of BODY Mid Section Right Side (Fourth-Row) */}
                <div className="my-10">
                    <p> message </p>
                </div>
                {/* Ending of BODY Mid Section Right Side (Fourth-Row) */}
            </div>
        </div>
    )
}

export default Mail;