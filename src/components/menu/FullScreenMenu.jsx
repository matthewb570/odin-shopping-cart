import "../../styles/FullScreenMenu.css";

export default function FullScreenMenu({ title, isOpen, setIsOpen, children }) {
  return (
    <section className={`full-screen-menu ${isOpen ? "open" : ""}`}>
      <div className="header">
        <h2 className="title">{title}</h2>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
      <div className="body">{children}</div>
    </section>
  );
}
