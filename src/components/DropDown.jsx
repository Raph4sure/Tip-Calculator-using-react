export default function DropDown({
    children,
    valueSelect,
    onChange,
    labelText,
    id,
}) {
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <select value={valueSelect} onChange={onChange}>
                <option value="0">Dissatisfied(0%)</option>
                <option value="5">1It was okay(5%)</option>
                <option value="10">It was good(10%)</option>
                <option value="20">Absolutely amazing!(20)%</option>
            </select>
        </div>
    );
}
