import Icon from "../icon/Icon";
import "../../styles/MenuButton.css";

export default function MenuButton({ isMenuOpen, setIsMenuOpen, className }) {
  return (
    <button
      className={`menu-button ${className}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <Icon iconName={"menu"} />
    </button>
  );
}
