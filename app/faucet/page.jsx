import Faucet from "@/components/login";
import Login from "@/components/login";

import dynamic from "next/dynamic";

export const metadata = {
  title: "FractIt Faucet",
};

const index = () => {
  return (
    <>
      <div>
        <Faucet />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
