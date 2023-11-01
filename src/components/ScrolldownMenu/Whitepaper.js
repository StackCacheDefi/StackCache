import { Link } from "react-router-dom";
import "./styles.css";

function WhitepaperMenu({ children }) {
  return (
    <>
      <div className="link-header">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {children}
        </div>
        <div className="sub-links">
          <Link
            to="https://tr.ee/lWPrqUOWyg"
            target="_blank">
            WHITEPAPER PDF
          </Link>
          <Link
            to="https://d1fdloi71mui9q.cloudfront.net/0RtRXxyRju7TJjeF2jUV_Stack%20Cache%20Litepaper%20v2.pdf"
            target="_blank">
            LITEPAPER PDF
          </Link>
          <Link
            to="https://tr.ee/Bvvbc0YVNz"
            target="_blank">
            ROADMAP PDF
          </Link>
        </div>
      </div>
    </>
  );
}

export default WhitepaperMenu;
