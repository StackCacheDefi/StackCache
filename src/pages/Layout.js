import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import LOGO from "../imgs/logo.svg";
import HAMBURGER from "../imgs/hamburger.png";
import { useEffect, useState } from "react";
import ProductsMenu from "../components/ScrolldownMenu/Products";
import CommunityMenu from "../components/ScrolldownMenu/Community";
import WhitepaperMenu from "../components/ScrolldownMenu/Whitepaper";

const Logo = styled.img`
  width: 150px;
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 55px;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 1280px;

  @media (max-width: 1280px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 1024px) {
    padding-left: 50px;
  }

  @media (max-width: 500px) {
    padding-left: 5px;
  }
`;


const EarlyYellowButton = styled.div`
  background: linear-gradient(180deg, rgba(244, 162, 39, 0.7) 0%, #F4A227 100.12%),
  linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  border-radius: 12px;
  height: 40px;
  min-width: 200px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 25px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.5s;
  color: #fff;

  &:hover {
    background: linear-gradient(180deg, rgba(244, 200, 50, 0.7) 0%, #F4B627 100.12%),
    linear-gradient(91.72deg, #FF0000 -8.25%, rgba(47, 1, 1, 0.93) 92.02%);
  }
`

const LaunchRedButton = styled.div`
  background: linear-gradient(180deg, #F5515F 0%, #9F041B 100%);
  border-radius: 12px;
  height: 40px;
  min-width: 200px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 25px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.5s;
  color: #fff;

  &:hover {
    background: linear-gradient(180deg, rgba(245, 81, 95, 0.8) 0%, rgba(159, 4, 27, 0.8) 100%);
  }
`

const Layout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <NavbarContainer>
        <Navbar>
          <LogoContainer>
            <Link to="/">
              <Logo src={LOGO} alt="stack cache logo" />
            </Link>
          </LogoContainer>
          <div className="hidden items-center gap-[45px] laptop:flex menu">
            <Link to="/about">About</Link>
            <ProductsMenu>Products</ProductsMenu>
            <WhitepaperMenu>Whitepaper</WhitepaperMenu>
            <CommunityMenu>Community</CommunityMenu>
            <Link to="/community/contact_us">Contact</Link>
          </div>
          <div className="laptop:hidden pr-[50px]">
            <img
              src={HAMBURGER}
              alt="hamburger menu"
              className="w-[30px]"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
          </div>
          <div
            className={`absolute top-[55px] left-0 w-full bg-white flex-col gap-3 py-3 z-20 px-[40px] ${
              isOpenMenu ? "flex items-start" : "hidden"
            }`}
          >
            <Link
              onClick={() => setIsOpenMenu(false)}
              to="/about"
              className="text-[16px] font-[600]"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpenMenu(false)}
              to="/stack_fair_launch"
              className="text-[16px] font-[600] text-[#BA1C30]"
            >
              *STACK LIQUIDITY DRIVE (FAIR LAUNCH)
            </Link>
            <Link
              onClick={() => setIsOpenMenu(false)}
              to="/early_adopters"
              className="text-[16px] font-[600] text-[#F4A227]"
            >
              *Early Adopter Pre-Sale
            </Link>
            <Link
              className="text-[16px] font-[600]"
              onClick={() => setIsOpenMenu(false)}
              to="/products/stack">
              Stack Token
            </Link>
            <Link
              className="text-[16px] font-[600]"
              onClick={() => setIsOpenMenu(false)}
              to="/products/cache">
              Cache Token
            </Link>
            <Link className="text-[16px] font-[600]">NTT's</Link>
            <ul className="ml-[30px] list-disc flex flex-col items-start">
              <li>
                <Link onClick={() => setIsOpenMenu(false)} to="/hboardntt">
                  HBoard
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpenMenu(false)} to="/boardntt">
                  Board
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpenMenu(false)} to="/committeentt">
                  Committee
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpenMenu(false)} to="/products/team_treasuries">
                  Team Leader
                </Link>
              </li>
            </ul>
            <Link className="text-[16px] font-[600]">Whitepaper</Link>
            <ul className="ml-[30px] list-disc flex flex-col items-start">
              <li>
                <Link
                  to="https://tr.ee/lWPrqUOWyg"
                  target="_blank">
                  Whitepaper PDF
                </Link>
              </li>
              <li>
                <Link
                  to="https://d1fdloi71mui9q.cloudfront.net/0RtRXxyRju7TJjeF2jUV_Stack%20Cache%20Litepaper%20v2.pdf"
                  target="_blank">
                  Litepaper PDF
                </Link>
              </li>
              <li>
                <Link
                  to="https://tr.ee/Bvvbc0YVNz"
                  target="_blank">
                  Roadmap PDF
                </Link>
              </li>
            </ul>
            <Link className="text-[16px] font-[600]">Community</Link>
            <ul className="ml-[30px] list-disc flex flex-col items-start">
              <li>
                <Link onClick={() => setIsOpenMenu(false)} to="/community/stack_nation">
                  Stack Nation
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpenMenu(false)} to="/community/resources">
                  Resources
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpenMenu(false)} to="/community/contact_us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden pr-[50px] laptop:flex gap-[20px]">
            <Link to="/stack_fair_launch">
              <LaunchRedButton>STACK LAUNCH - BUY NOW</LaunchRedButton>
            </Link>
            <Link to="/early_adopters">
              <EarlyYellowButton>Early Adopter Pre-Sale</EarlyYellowButton>
            </Link>
          </div>
        </Navbar>
      </NavbarContainer>
      <div className="flex flex-col items-center relative z-0">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
