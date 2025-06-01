import Icon from "../icon/Icon";

export default function MenuButton({ isMenuOpen, setIsMenuOpen, className }) {
  return (
    <button
      className={`menu-button icon-button primary ${className}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <Icon iconName={"menu"} />
    </button>
  );
}
