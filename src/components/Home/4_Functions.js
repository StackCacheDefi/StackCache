import styled from "styled-components";
import PEOPLE_ICON from "../../imgs/icon-people.svg";
import SECURITY_ICON from "../../imgs/icon-security.svg";
import MONEY_ICON from "../../imgs/icon-money.svg";
import ATTRIBUTE_CARD_BG from "../../imgs/attribute-card-bg.png";

const Title = styled.div`
  font-family: WorkSans;
  font-weight: 200;
  font-size: 48px;
  color: #fff;
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 100px;

  @media (max-width: 1440px) {
    gap: 50px;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 300px;

  @media (max-width: 780px) {
    gap: 10px;
  }
`;

const ItemIcon = styled.img`
  width: 70px;
`;

const ItemTitle = styled.div`
  font-family: SpaceGrotesk;
  font-size: 24px;
  letter-spacing: -0.03em;
  font-weight: 500;
  color: #fff;
`;

const ItemDescription = styled.div`
  font-family: WorkSans;
  font-size: 18px;
  font-weight: 200;
  color: #fff;
`;

const AttributeCard = styled.div`
  border: 1px solid ${props => props.color};
  border-radius: 15px;
  height: 370px;
  padding: 0px 20px;
  background-image: url(${ATTRIBUTE_CARD_BG})
`

const AttributeCardTitle = styled.div`
  font-family: 'SpaceGrotesk';
  padding-top: 40px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.03em;
  color: #FFFFFF;
`

const AttributeCardDescription = styled.div`
  font-family: 'WorkSans';
  font-weight: 200;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  padding-top: 50px;

  @media (max-width: 1280px) {
    font-size: 16px;
  }
`

export default function Functions() {
  return (
    <div className="flex flex-col items-center gap-[50px]">
      <Title>Why Stack Cache?</Title>
      <ItemsContainer>
        <Item>
          <ItemIcon src={PEOPLE_ICON} alt="people icon" />
          <ItemTitle>People Oriented</ItemTitle>
          <ItemDescription>
            The first Defi project with full DAO governance and is 100% community managed. No dev/team fees or wallets
          </ItemDescription>
        </Item>
        <Item>
          <ItemIcon src={SECURITY_ICON} alt="security icon" />
          <ItemTitle>Sustainable Yield</ItemTitle>
          <ItemDescription>
            Ecosystem built to grow in value while adding locked liquidity and is sustainably powered by protocol/team treasuries & user participation
          </ItemDescription>
        </Item>
        <Item>
          <ItemIcon src={MONEY_ICON} alt="money icon" />
          <ItemTitle>Passive Cash Flow</ItemTitle>
          <ItemDescription>
            The advanced S/C tokenomics enables multiple products to offer instant, daily, and bi-weekly passive rewards for all
          </ItemDescription>
        </Item>
      </ItemsContainer>
      <div className="font-sans font-[200] text-[48px] text-white mt-[50px]">Key Attributes</div>
      <div className="grid tablet:grid-cols-2 justify-center laptop:grid-cols-4 gap-[40px] max-w-[300px] tablet:max-w-[600px] laptop:max-w-none laptop:w-full px-2">
        <AttributeCard color="#DF3D4E">
          <AttributeCardTitle>Tokenomics</AttributeCardTitle>
          <AttributeCardDescription>Built to keep the protocol sustainable while organically self-generating rewards. Stack supply constricts & yields for Cache, supporting the entire ecosystem</AttributeCardDescription>
        </AttributeCard>
        <AttributeCard color="#DF3D4E">
          <AttributeCardTitle>Blue Chip Assets</AttributeCardTitle>
          <AttributeCardDescription>Stack Cache is backed by blue chip assets and stablecoins for added protocol strength. Users can also earn and receive blue chip tokens such as BTC and BNB through our products</AttributeCardDescription>
        </AttributeCard>
        <AttributeCard color="#DF3D4E">
          <AttributeCardTitle>Built on BSC</AttributeCardTitle>
          <AttributeCardDescription>The Binance Smart Chain (BSC) offers us: stability, liquidity, security. decentralization, low gas fees, and compatibility with Ethereum Virtual Machine (EVM)</AttributeCardDescription>
        </AttributeCard>
        <AttributeCard color="#DF3D4E">
          <AttributeCardTitle>DAO Voting</AttributeCardTitle>
          <AttributeCardDescription>All S/C participants are DAO members, enabling users to democratically participate in the protocol. NTT’s gives users additional voting privileges</AttributeCardDescription>
        </AttributeCard>
      </div>
    </div>
  );
}
