import { Link } from "react-router-dom";
import "./styles.css";

function ScrolldownMenu({ children }) {
  return (
    <>
      <div className="link-header">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {children}
        </div>
        <div className="sub-links">
          <Link to="/products/stack">STACK TOKEN</Link>
          <Link to="/products/cache">CACHE TOKEN</Link>
          <Link to="/products/ntt">NTT'S</Link>
        </div>
      </div>
    </>
  );
}

export default ScrolldownMenu;
