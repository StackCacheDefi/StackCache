import { Link } from "react-router-dom";
import "./styles.css";

function CommunityMenu({ children }) {
  return (
    <>
      <div className="link-header">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {children}
        </div>
        <div className="sub-links">
          <Link to="/community/resources">RESOURCES</Link>
          <Link to="/community/stack_nation">TEAM (STACK NATION)</Link>
        </div>
      </div>
    </>
  );
}

export default CommunityMenu;
