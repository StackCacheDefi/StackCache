import { Link } from "react-router-dom";
import "./styles.css";

function ProductsMenu({ children }) {
  return (
    <>
      <div className="link-header">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {children}
        </div>
        <div className="sub-links">
          <Link className="text-[#BA1C30]" to="/stack_fair_launch">
            *STACK LIQUIDITY DRIVE (FAIR LAUNCH)
          </Link>
          <Link className="text-[#F4A227]" to="/early_adopters">
            *EARLY ADOPTER PRE-SALE
          </Link>
          <Link to="/products/stack">STACK TOKEN</Link>
          <Link to="/products/cache">CACHE TOKEN</Link>
          <Link to="/products/ntt">NTT'S</Link>
          <div className="pl-[40px] list-disc">
            <Link className="list-item" to="/hboardntt">HBoard</Link>
            <Link className="list-item" to="/boardntt">Board</Link>
            <Link className="list-item" to="/committeentt">Committee</Link>
            <Link className="list-item" to="/teamleaderntt">Team Leader</Link>
          </div>
          <Link to="/products/team_treasuries">TEAM TREASURIES</Link>
        </div>
      </div>
    </>
  );
}

export default ProductsMenu;
