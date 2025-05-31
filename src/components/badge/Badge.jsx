import "../../styles/Badge.css";
import StringUtils from "../../utils/StringUtils";

export default function Badge({ badgeText, className, children }) {
  return (
    <div className={`badge ${className}`}>
      <span
        className={`badge-content ${StringUtils.isEmpty(badgeText) ? "hidden" : ""}`}
      >
        {badgeText}
      </span>
      {children}
    </div>
  );
}
