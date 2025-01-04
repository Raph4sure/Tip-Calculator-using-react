import { useState } from "react";
import DropDown from "./DropDown";

export default function MyService({value, onChange}) {



    return (
        <div>
            <DropDown
                labelText="How did you like the service?"
                id="bill"
                valueSelect={value}
                onChange={(e) => onChange(Number(e.target.value))}
            />
         
        </div>
    );
}
 