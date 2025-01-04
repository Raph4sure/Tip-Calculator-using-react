import { useState } from "react";
import DropDown from "./DropDown";

export default function MyService({value, onChange}) {



    return (
        <div>
            <DropDown
                labelText="This is my bill"
                id="bill"
                valueSelect={value}
                onChange={(e) => onChange(Number(e.target.value))}
            />
            {/* </DropDown> */}
            {/* <p>Percentage value: { percentageService }</p> */}
        </div>
    );
}
 