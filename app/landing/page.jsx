import Landing from "@/components/landing";
import dynamic from "next/dynamic";

export const metadata = {
  title: "FractIt Lending: Unlock Liquidity with Your Real Estate Tokens",
};

const index = () => {
  return (
    <>
      <div>
        <Landing />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
