import Reit from "@/components/reit";
import dynamic from "next/dynamic";

export const metadata = {
  title: " Fractit REIT: Diversified Real Estate Investment at Your Fingertips",
};

const index = () => {
  return (
    <>
      <div>
        <Reit />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
