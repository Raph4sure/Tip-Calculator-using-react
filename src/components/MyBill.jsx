import { useState } from "react";

export default function MyBill({value, onChange}) {


    return (
        <div>
            <label htmlFor={value}>How much was the bill?</label>
            <input type="number" id={value} value={value} onChange={(e) => onChange(Number(e.target.value))} />
            {/* <p>{value}</p> */}
        </div>
    );
}
