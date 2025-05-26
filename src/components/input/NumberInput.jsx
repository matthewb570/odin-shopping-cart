import Icon from "../icon/Icon";
import "../../styles/NumberInput.css";

export default function NumberInput({
  value,
  setValue,
  allowNegatives = false,
}) {
  function handleInputChange(event) {
    const intValue = parseInt(event.target.value);

    if (allowNegatives) {
      setValue(intValue || 0);
    } else {
      setValue(intValue >= 0 ? intValue : 0);
    }
  }

  return (
    <div className="number-input">
      <button
        className="icon-button secondary"
        aria-label="Decrease quantity"
        onClick={() => setValue(value - 1)}
        disabled={!allowNegatives && value <= 0}
      >
        <Icon iconName={"minus"} />
      </button>
      <input
        type="number"
        aria-label="Quantity"
        value={value.toString()}
        onChange={handleInputChange}
        min={0}
      />
      <button
        className="icon-button secondary"
        aria-label="Increase quantity"
        onClick={() => setValue(value + 1)}
      >
        <Icon iconName={"plus"} />
      </button>
    </div>
  );
}
