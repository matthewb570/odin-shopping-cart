import "../../styles/Badge.css";
import StringUtils from "../../utils/StringUtils";

export default function Badge({ badgeText, className, label, children }) {
  return (
    <div className={`badge ${className}`}>
      <span
        className={`badge-content ${StringUtils.isEmpty(badgeText) ? "hidden" : ""}`}
        aria-label={label}
      >
        {badgeText}
      </span>
      {children}
    </div>
  );
}
