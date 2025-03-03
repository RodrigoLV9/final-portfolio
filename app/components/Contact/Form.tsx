import { BsFillSendFill as SendIcon } from "react-icons/bs";
export default function Form(){
    return(
        <form action="" className="form">
            <div className="containerInputs">
                <div className="containerInput">
                <label htmlFor="" className="name">Name*</label>
                <input type="text" placeholder="name" />
            </div>
            <div className="containerInput">
                <label htmlFor="" className="name">Email*</label>
                <input type='email' placeholder="Email" />
            </div>
            </div>
            <div className="containerInput">
                <label htmlFor="" className="name">Subject*</label>
                <input type="text" placeholder="Subject" />
            </div>
            <div className="containerInput">
                <label htmlFor="" className="name">Message*</label>
                <input type="text" placeholder="Message" />
            </div>
            <button>
                <p>Send</p>
                <SendIcon/>
            </button>
        </form>
    )
}