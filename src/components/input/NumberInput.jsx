import Icon from "../icon/Icon";
import "../../styles/NumberInput.css";

export default function NumberInput({ value, setValue }) {
  return (
    <div className="number-input">
      <button
        className="icon-button secondary"
        aria-label="Decrease quantity"
        onClick={() => setValue(value - 1)}
      >
        <Icon iconName={"minus"} />
      </button>
      <input type="number" aria-label="Quantity" value={value} />
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
