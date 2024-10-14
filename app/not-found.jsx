import dynamic from "next/dynamic";
import NotFound from "@/components/404";

export const metadata = {
  title: "My Account",
};

const index = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
