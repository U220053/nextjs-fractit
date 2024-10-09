import Wrapper from "@/components/layout/Wrapper";
import HomeMain from "./(homes)/home-1/page";
import GridV6 from "@/components/listing-grid/grid-v6";

export const metadata = {
  title:
    "Explore Tokenized Real Estate Properties: Your Gateway to Fractional Ownership",
  description:
    "Explore Tokenized Real Estate Properties: Your Gateway to Fractional Ownership",
};

export default function Home() {
  return (
    <Wrapper>
      {/* <HomeMain /> */}
      <GridV6 />
    </Wrapper>
  );
}
