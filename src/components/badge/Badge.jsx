import "../../styles/Badge.css";
import StringUtils from "../../utils/StringUtils";

export default function Badge({ badgeText, children }) {
  return (
    <div className="badge">
      <span
        className={`badge-content ${StringUtils.isEmpty(badgeText) ? "hidden" : ""}`}
      >
        {badgeText}
      </span>
      {children}
    </div>
  );
}
