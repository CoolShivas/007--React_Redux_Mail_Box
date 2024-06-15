import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";

const Msg = () => {
    return (
        <>
            {/* Starting of BODY Mid Section (Third-Row) Message */}
            <div className="flex items-start justify-between border-b border-gray-200 px-4 text-sm hover:cursor-pointer hover:shadow">

                {/* Starting of BODY Mid Section (Third-Row) Message Icons */}
                <div className="flex items-center gap-3">
                    <div className="flex-none text-gray-300">
                        <MdCropSquare className="w-5 h-5" />
                    </div>
                    <div className="flex-none text-gray-300">
                        <RiStarLine className="w-5 h-5" />
                    </div>
                </div>
                {/* Ending of BODY Mid Section (Third-Row) Message Icons */}

                {/* Starting of BODY Mid Section (Third-Row) Message Text */}
                <div className="flex-1 ml-4">
                    <p className="text-gray-600 inline-block truncate max-w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci numquam rem! Recusandae, aliquid officia.</p>
                </div>
                {/* Ending of BODY Mid Section (Third-Row) Message Text */}

                {/* Starting of BODY Mid Section (Third-Row) Message Time */}
                <div className="flex-none text-gray-400 text-sm">
                    apna time aega
                </div>
                {/* Ending of BODY Mid Section (Third-Row) Message Time */}

            </div>
            {/* Ending of BODY Mid Section (Third-Row) Message */}
        </>
    )
}

export default Msg;