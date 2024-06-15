import { RxCross2 } from "react-icons/rx";

const SendMail = () => {
    return (
        <div className="bg-white ma-w-dxl shadow-xl shadow-slate-600 rounded-t-md">
            {/* Starting of Compose BODY Section (First-Row) */}
            <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
                {/* Starting of Compose BODY Right Section (First-Row) */}
                <h1> New Message </h1>
                {/* Ending of Compose BODY Right Section (First-Row) */}

                {/* Starting of Compose BODY Left Section (First-Row) */}
                <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <RxCross2 size={"10px"} />
                </div>
                {/* Ending of Compose BODY Left Section (First-Row) */}
            </div>
            {/* Ending of Compose BODY Section (First-Row) */}


            {/* Starting of Compose BODY Section (Second-Row) */}
            <form action="" className="flex flex-col p-3 gap-2">
                <input type="text" placeholder="To" className="outline-none py-1" />
                <input type="text" placeholder="Subject" className="outline-none py-1" />
                <textarea name="message" cols={30} rows={10} className="outline-none py-1"></textarea>
                <button type="submit" className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium">
                    Send
                </button>
            </form>
            {/* Ending of Compose BODY Section (Second-Row) */}
        </div>
    )
}

export default SendMail;