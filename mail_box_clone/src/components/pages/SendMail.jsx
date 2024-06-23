import "react-quill/dist/quill.snow.css"
import ReactQuill from "react-quill";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCompose, setSendMails } from "../store/reduxStore";
import { useState } from "react";

const SendMail = () => {

    // const [openCompose, setOpenCompose] = useState(false);

    // So, we in the SideBar and the Compose Btn is located here. But, the most important thing is that Compose Functional Component i.e, SendMail is an another file and to implement this local useState Hook either we have to make the SendMail Function here. Or we can pass the openCompose as props to that place. 

    // What is local state variable ? 

    //   This is a local state variable that can be used in this functional component or either can be accessible in another functional component with the help of props drill or by context api. But, the best way is the Redux store now a days. Where, we pass the openCompose and setOpenCompose state there and can be access any where in the program. So, install react-redux and @reduxjs/toolkit.

    const openCompose = useSelector((store) => store.appy.openCompose);

    const dispatch = useDispatch();

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [contentBox, setContentBox] = useState("");

    const handlerOnSubmitComposeMail = async (e) => {
        e.preventDefault();

        const sendEmailDetails = {
            to: to,
            subject: subject,
            contentBox: contentBox,
        };

        console.log(sendEmailDetails);

        const senderEmail = localStorage.getItem("Save-Email");
        console.log(senderEmail);
        // // Getting the sender email that is who is composing this email now;
        const receiverCleanEmail = JSON.stringify(to.replace(/[@.]/g, ""));
        console.log(receiverCleanEmail);
        // // Getting the receiver's email without @ and full-stop that is whom we are sending the mail now;

        // // Receipent Side :-*****************
        try {

            const response = await fetch(`https://smail-c21e6-default-rtdb.firebaseio.com/indore/${senderEmail}/sendBox.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ sendEmailDetails })
            });

            if (!response.ok) {
                throw new Error("Mail not sent to server");
            }

            console.log("Email send successfully", response);

            const data = await response.json();

            dispatch(setSendMails({
                sendMails: data,
                receiversId: to,
            }));

        } catch (error) {
            console.log("Something went wrong to send the mail", error);
            alert("Something went wrong to receiver's mail", error);
        }

        // // Receiver Side :-*******************
        try {

            const response = await fetch(`https://smail-c21e6-default-rtdb.firebaseio.com/indore/${receiverCleanEmail}/inbox.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ sendEmailDetails })
            });

            if (!response.ok) {
                throw new Error("Mail not receive from server");
            }

            console.log("Email send successfully", response);

            const data = await response.json();

            dispatch(setSendMails({
                sendMails: data,
                receiversId: to,
            }));


        } catch (error) {
            console.log("Something went wrong to receiver's mail", error);
            alert("Something went wrong to receiver's mail", error);

        }
        dispatch(setOpenCompose(false));
        setTo("");
        setSubject("");
        setContentBox("");
    };


    return (
        <div className={`${openCompose ? "block" : "hidden"} bg-white ma-w-dxl shadow-xl shadow-slate-600 rounded-t-md`}>
            {/* Starting of Compose BODY Section (First-Row) */}
            <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
                {/* Starting of Compose BODY Right Section (First-Row) */}
                <h1> New Message </h1>
                {/* Ending of Compose BODY Right Section (First-Row) */}

                {/* Starting of Compose BODY Left Section (First-Row) */}
                <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                        dispatch(setOpenCompose(false));
                    }}
                >
                    <RxCross2 size={"10px"} />
                </div>
                {/* Ending of Compose BODY Left Section (First-Row) */}
            </div>
            {/* Ending of Compose BODY Section (First-Row) */}


            {/* Starting of Compose BODY Section (Second-Row) */}
            <form className="flex flex-col p-3 gap-2" onSubmit={handlerOnSubmitComposeMail}>

                <input
                    type="text"
                    placeholder="To"
                    className="outline-none py-1"
                    value={to}
                    onChange={(e) => { setTo(e.target.value) }}
                />

                <input
                    type="text"
                    placeholder="Subject"
                    className="outline-none py-1"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }}
                />

                {/* <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    className="outline-none py-1"
                ></textarea> */}

                <ReactQuill
                    theme="snow"
                    value={contentBox}
                    onChange={setContentBox}
                ></ReactQuill>

                <button type="submit" className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium">
                    Send
                </button>
            </form>
            {/* Ending of Compose BODY Section (Second-Row) */}
        </div>
    )
}

export default SendMail;