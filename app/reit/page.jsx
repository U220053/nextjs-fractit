import Reit from "@/components/reit";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Hhaha || FindHouse - Real Estate React Template",
  description: "FindHouse - Real Estate React Template",
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
