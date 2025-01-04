import { useState } from "react";

import MyBill from "./MyBill";
import MyService from "./MyService";
import MyFriendService from "./MyFriendService";

export default function Forms() {
    const [bill, setBill] = useState("");

    const [service, setService] = useState("");

    const [friendService, setfriendService] = useState("");

    const Tip = (service + friendService) / 2;

    const total = bill + Tip;

    function handleSubmit(e) {
        e.preventDefault();
    }

    function reset() {
        setBill("");
        setService("");
        setfriendService("");

    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <MyBill value={bill} onChange={setBill} />
            <MyService value={service} onChange={setService} />
            <MyFriendService
                value={friendService}
                onChange={setfriendService}
            />
            {bill > 0 &&(<>
                <strong>
                    You pay ${total} (${bill} + ${Tip} tip)
                </strong>
            
            <br/>
            <button type="button" onClick={reset}>Reset</button> </>)
            }
        </form>
    );
}
