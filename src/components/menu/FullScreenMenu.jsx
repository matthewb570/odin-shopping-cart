import "../../styles/FullScreenMenu.css";
import Icon from "../icon/Icon";

export default function FullScreenMenu({ title, isOpen, setIsOpen, children }) {
  return (
    <section className={`full-screen-menu ${isOpen ? "open" : ""}`}>
      <div className="header">
        <h2 className="title">{title}</h2>
        <button
          className="icon-button primary"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <Icon iconName={"close"} />
        </button>
      </div>
      <div className="body">{children}</div>
    </section>
  );
}
