import Wrapper from "@/components/layout/Wrapper";
import HomeMain from "./(homes)/home-1/page";
import GridV6 from "@/components/listing-grid/grid-v6";

export const metadata = {
  title: "Home-1 || FindHouse - Real Estate React Template",
  description: "FindHouse - Real Estate React Template",
};

export default function Home() {
  return (
    <Wrapper>
      {/* <HomeMain /> */}
      <GridV6 />
    </Wrapper>
  );
}
