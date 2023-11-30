import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { Web3Modal } from "@web3modal/react";
import { EthereumClient } from "@web3modal/ethereum";

import { wagmiClient, chains } from "./configs/wagmi";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import HBoardNTT from "./pages/HBoardNTT";
import About from "./pages/About";
import StackToken from "./pages/Products/StackToken";
import CacheToken from "./pages/Products/CacheToken";
import NTTMain from "./pages/NTTMain";
import BoardNTT from "./pages/BoardNTT";
import CommitteeNTT from "./pages/CommitteeNTT";
import EarlyAdopters from "./pages/EarlyAdopters";
import ContactUs from "./pages/Community/ContactUs";
import StackNation from "./pages/Community/StackNation";
import Resources from "./pages/Community/Resources";
import TeamTreasuries from "./pages/Products/TeamTreasuries";
import StackFairLaunch from "./pages/StackFairLaunch";
import StackTokenPhase from "./pages/StackTokenPhase";

import { Web3Provider } from "./contexts/Web3Context";

import "./App.css";
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <div className="App">
      <WagmiConfig client={wagmiClient}>
        <Web3Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="hboardntt" element={<HBoardNTT />} />
                <Route path="boardntt" element={<BoardNTT />} />
                <Route path="committeentt" element={<CommitteeNTT />} />
                <Route path="about" element={<About />} />
                <Route path="products/stack" element={<StackToken />} />
                <Route path="products/cache" element={<CacheToken />} />
                <Route path="products/ntt" element={<NTTMain />} />
                <Route path="products/team_treasuries" element={<TeamTreasuries />} />
                <Route path="early_adopters" element={<EarlyAdopters />} />
                <Route path="early_adopter" element={<EarlyAdopters />} />
                <Route path="community/contact_us" element={<ContactUs />} />
                <Route path="community/stack_nation" element={<StackNation />} />
                <Route path="community/resources" element={<Resources />} />
                <Route path="stack_fair_launch" element={<StackFairLaunch />} />
                <Route path="stack_token" element={<StackTokenPhase />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Web3Provider>
      </WagmiConfig>
      <Web3Modal
        projectId={process.env.REACT_APP_WALLETCONNECT_PROJECT_ID}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-accent-color": "#21e786",
          "--w3m-accent-fill-color": "#000",
        }}
      />
    </div>
  );
}

export default App;
