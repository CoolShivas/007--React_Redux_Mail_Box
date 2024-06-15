import { MdCropSquare } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";

const Inbox = () => {
    return (
        <div className="flex-1 bg-red-100 rounded-xl mx-5">
            <div className="flex items-center bg-orange-200 justify-between px-4">

                {/* Starting of BODY MID SECTION Icons  */}
                <div className="flex items-center gap-2 text-gray-700 py-2">
                    <div className="flex items-center gap-1">
                        <MdCropSquare size={"20px"} />
                        <FaCaretDown size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdRefresh size={"20px"} />
                    </div>
                </div>
                {/* Ending of BODY MID SECTION Icons  */}

            </div>
        </div>
    )
}

export default Inbox;