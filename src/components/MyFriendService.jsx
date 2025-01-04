import { useState } from "react";
import DropDown from "./DropDown";
export default function MyFriendService({ value, onChange }) {

    return (
        <div>
            <DropDown
                labelText="How did your friend like the service"
                valueSelect={value}
                id="friend"
                onChange={(e) => onChange(Number(e.target.value))}
            />
              
            {/* </DropDown> */}
        </div>
    );
}
