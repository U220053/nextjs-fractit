import dynamic from "next/dynamic";
import NotFound from "../not-found";

export const metadata = {
  title: " My Account",
};

const index = () => {
  return (
    <>
      <div>
        <NotFound />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
