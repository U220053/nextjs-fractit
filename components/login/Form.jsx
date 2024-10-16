// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Abstraxion,
//   useAbstraxionAccount,
//   useAbstraxionSigningClient,
//   useModal,
// } from "@burnt-labs/abstraxion";
// import { Button } from "@burnt-labs/ui";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import twitter from "../../public/assets/images/Twitter.svg";
// import discord from "../../public/assets/images/Discord.svg";

// const claimContractAddress =
//   "xion13ccaczqvafslzd2r02whrpaw0atjuufldc5twntqz6xpn8e6shssddh5yj"; // Ensure this is defined
// const feeDenom = process.env.NEXT_PUBLIC_FEE_DENOM || "uxion";
// const gasLimit = process.env.NEXT_PUBLIC_GAS_LIMIT || "500000";
// const ibcDenom = process.env.NEXT_PUBLIC_IBC_DENOM ?? "";

// const Form = () => {
//   const { data: account } = useAbstraxionAccount();
//   const { client } = useAbstraxionSigningClient();
//   const [showAbstraxion, setShowAbstraxion] = useModal();
//   const [isConnected, setIsConnected] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [transactionHash, setTransactionHash] = useState("");
//   const [usdcBalance, setUsdcBalance] = useState("0");
//   const [isTwitterFollowed, setIsTwitterFollowed] = useState(false);
//   const [isDiscordFollowed, setIsDiscordFollowed] = useState(false);

//   useEffect(() => {
//     // Check if the user is connected
//     if (account && account.bech32Address) {
//       setIsConnected(true);
//       checkUsdcBalance();
//     } else {
//       setIsConnected(false);
//     }
//   }, [account]);
//   console.log("account", account.bech32Address);

//   const checkUsdcBalance = async () => {
//     if (client && account) {
//       try {
//         const balance = await client.getBalance(
//           account.bech32Address,
//           ibcDenom
//         );

//         let balanceAmount = Number(balance.amount) / 1000000;
//         setUsdcBalance(balanceAmount.toFixed(2));
//       } catch (error) {
//         console.error("Error fetching USDC balance:", error);
//       }
//     }
//   };
//   console.log("istwitterfollowed", isTwitterFollowed);
//   console.log("isdiscordfollowed", isDiscordFollowed);
//   const handleClaim = async () => {
//     if (!isTwitterFollowed || !isDiscordFollowed) {
//       toast.error(
//         "Please follow on both Twitter and Discord to claim the faucet!"
//       );
//       return;
//     }
//     setLoading(true);

//     try {
//       if (!client || !account) {
//         throw new Error("Wallet not connected");
//       }

//       const claimMsg = {
//         claim: {},
//       };

//       const claimRes = await client.execute(
//         account.bech32Address,
//         claimContractAddress,
//         claimMsg,
//         {
//           amount: [{ amount: "0", denom: "uxion" }],
//           gas: "500000",
//         }
//       );

//       setTransactionHash(claimRes.transactionHash);
//       toast.success("Faucet claimed successfully!");
//     } catch (error) {
//       console.error("Claiming error:", error);
//       toast.error("Claiming failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {isConnected ? (
//         <>
//           {" "}
//           <div className="mb-6">
//             <div className="flex justify-between mt-2 ">
//               <span style={{ color: "#3b82f6" }} className="font-bold">
//                 Wallet Address :{account.bech32Address}{" "}
//               </span>
//             </div>
//           </div>
//         </>
//       ) : (
//         <></>
//       )}
//       <div
//         className="mb-4 "
//         style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//       >
//         <Button
//           style={{
//             backgroundColor: "#3b82f6",
//             color: "white",
//             marginBottom: "10px",
//             borderColor: "#3b82f6",
//           }}
//           className="btn btn-block"
//           onClick={() => setIsTwitterFollowed(true)}
//         >
//           {isTwitterFollowed ? "Followed on Twitter" : "Follow on Twitter"}
//         </Button>
//         <Button
//           style={{
//             backgroundColor: "#3b82f6",
//             color: "white",
//             marginBottom: "10px",
//             borderColor: "#3b82f6",
//           }}
//           className="btn btn-block"
//           onClick={() => setIsDiscordFollowed(true)}
//         >
//           {isDiscordFollowed ? "Followed on Discord" : "Follow on Discord"}
//         </Button>
//       </div>
//       {isConnected ? (
//         <>
//           <div className="mb-6">
//             <div className="flex justify-between mt-2 ">
//               <span style={{ color: "#3b82f6" }} className="font-bold">
//                 Wallet Balance : {usdcBalance} USDC
//               </span>
//             </div>
//           </div>
//           <Button
//             style={{
//               backgroundColor: "#3b82f6",
//               color: "white",
//               borderColor: "#3b82f6",
//               cursor:
//                 !isTwitterFollowed || !isDiscordFollowed
//                   ? "not-allowed"
//                   : "pointer",
//             }}
//             className="btn btn-block btn-thm w-100"
//             onClick={handleClaim}
//             disabled={loading || !isTwitterFollowed || !isDiscordFollowed}
//           >
//             {loading ? "Claiming..." : "Claim Faucet"}
//           </Button>
//         </>
//       ) : (
//         <Button
//           style={{
//             backgroundColor: "#3b82f6",
//             color: "white",
//             borderColor: "#3b82f6",
//           }}
//           className="btn btn-block btn-thm w-100"
//           onClick={() => setShowAbstraxion(true)}
//         >
//           Connect Wallet
//         </Button>
//       )}

//       {transactionHash && (
//         <div className="mt-4">
//           <p>Transaction Successful!</p>
//           <p style={{ fontWeight: "bold", color: "green" }}>
//             Transaction Hash:{" "}
//             <a
//               href={`https://explorer.burnt.com/xion-testnet-1/tx/${transactionHash}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 fontWeight: "bold",
//                 color: "green",
//                 wordBreak: "break-all",
//               }}
//             >
//               {transactionHash}
//             </a>
//           </p>
//         </div>
//       )}

//       <Abstraxion />
//       <ToastContainer position="bottom-right" />
//     </>
//   );
// };

// export default Form;
"use client";
import React, { useState, useEffect } from "react";
import {
  Abstraxion,
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal,
} from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import twitter from "../../public/assets/images/twitter_white.svg";
import discord from "../../public/assets/images/discord_white.svg";
import AllStatistics from "../dashboard/my-dashboard/AllStatistics";
import Images from "next/image";

const claimContractAddress =
  "xion13ccaczqvafslzd2r02whrpaw0atjuufldc5twntqz6xpn8e6shssddh5yj"; // Ensure this is defined
const feeDenom = process.env.NEXT_PUBLIC_FEE_DENOM || "uxion";
const gasLimit = process.env.NEXT_PUBLIC_GAS_LIMIT || "500000";
const ibcDenom = process.env.NEXT_PUBLIC_IBC_DENOM ?? "";

const Form = () => {
  const { data: account } = useAbstraxionAccount();
  const { client } = useAbstraxionSigningClient();
  const [showAbstraxion, setShowAbstraxion] = useModal();
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [usdcBalance, setUsdcBalance] = useState("0");
  const [isTwitterFollowed, setIsTwitterFollowed] = useState(
    () => JSON.parse(localStorage.getItem("isTwitterFollowed")) || false
  );
  const [isDiscordFollowed, setIsDiscordFollowed] = useState(
    () => JSON.parse(localStorage.getItem("isDiscordFollowed")) || false
  );

  useEffect(() => {
    // Check if the user is connected
    if (account && account.bech32Address) {
      setIsConnected(true);
      checkUsdcBalance();
    } else {
      setIsConnected(false);
    }
  }, [account]);

  const checkUsdcBalance = async () => {
    if (client && account) {
      try {
        const balance = await client.getBalance(
          account.bech32Address,
          ibcDenom
        );

        let balanceAmount = Number(balance.amount) / 1000000;
        setUsdcBalance(balanceAmount.toFixed(2));
      } catch (error) {
        console.error("Error fetching USDC balance:", error);
      }
    }
  };

  // Update follow states and store them in localStorage
  const handleTwitterFollow = () => {
    setIsTwitterFollowed(true);
    localStorage.setItem("isTwitterFollowed", true);
    window.open("https://twitter.com/FractItLabs", "_blank");
  };

  const handleDiscordFollow = () => {
    setIsDiscordFollowed(true);
    localStorage.setItem("isDiscordFollowed", true);
    window.open("https://discord.gg/dJDKZTqMHq", "_blank");
  };

  const handleClaim = async () => {
    if (!isTwitterFollowed || !isDiscordFollowed) {
      toast.error(
        "Please follow on both Twitter and Discord to claim the faucet!"
      );
      return;
    }
    setLoading(true);

    try {
      if (!client || !account) {
        throw new Error("Wallet not connected");
      }

      const claimMsg = {
        claim: {},
      };

      const claimRes = await client.execute(
        account.bech32Address,
        claimContractAddress,
        claimMsg,
        {
          amount: [{ amount: "0", denom: "uxion" }],
          gas: "500000",
        }
      );

      setTransactionHash(claimRes.transactionHash);
      toast.success("Faucet claimed successfully!");
    } catch (error) {
      console.error("Claiming error:", error);
      toast.error("Claiming failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">
        <span>
          How to Claim: <div>1. Log in with your Meta (XION) account.</div>{" "}
          <div>2. Follow us on Twitter and join our Discord channel.</div>
          <div>3. Claim your USDC from the faucet.</div>
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",

              borderColor: "#3b82f6",
            }}
            className="btn btn-block"
            onClick={handleTwitterFollow}
          >
            {isTwitterFollowed ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>Followed on</span>
                <Images src={discord} alt="X" width={20} height={20} />{" "}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>Follow on</span>
                <Images src={discord} alt="X" width={20} height={20} />{" "}
              </div>
            )}
          </Button>
          <Button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",

              borderColor: "#3b82f6",
            }}
            className="btn btn-block"
            onClick={handleDiscordFollow}
          >
            {isDiscordFollowed ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>Joined</span>
                <Images
                  src={twitter}
                  alt="Discord"
                  width={30}
                  height={30}
                />{" "}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>Join</span>
                <Images
                  src={twitter}
                  alt="Discord"
                  width={30}
                  height={30}
                />{" "}
              </div>
            )}
          </Button>
        </div>

        {isConnected ? (
          <>
            <div className="mb-6" style={{ marginBottom: "10px" }}>
              <div className="flex justify-between mt-2 ">
                <span style={{ color: "#3b82f6" }} className="font-bold">
                  Wallet Balance : {usdcBalance} USDC
                </span>
              </div>
            </div>
            <>
              <div className="mb-6" style={{ marginBottom: "10px" }}>
                <div className="flex justify-between mt-2 ">
                  <span style={{ color: "#3b82f6" }} className="font-bold">
                    Your Wallet : {account.bech32Address}{" "}
                  </span>
                </div>
              </div>
            </>
            <Button
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                borderColor: "#3b82f6",
                borderRadius: "10px",
                // cursor:
                //   !isTwitterFollowed || !isDiscordFollowed
                //     ? "not-allowed"
                //     : "pointer",
              }}
              className="btn btn-block btn-thm w-100"
              onClick={handleClaim}
              // disabled={loading || !isTwitterFollowed || !isDiscordFollowed}
              disabled={loading}
            >
              {loading ? "Claiming..." : "Claim Faucet"}
            </Button>
          </>
        ) : (
          <Button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              borderColor: "#3b82f6",
            }}
            className="btn btn-block btn-thm w-100"
            onClick={() => setShowAbstraxion(true)}
          >
            Connect Wallet
          </Button>
        )}

        {transactionHash && (
          <div className="mt-4">
            <p>Transaction Successful!</p>
            <p style={{ fontWeight: "bold", color: "green" }}>
              Transaction Hash:{" "}
              <a
                href={`https://explorer.burnt.com/xion-testnet-1/tx/${transactionHash}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  color: "green",
                  wordBreak: "break-all",
                }}
              >
                {transactionHash}
              </a>
            </p>
          </div>
        )}
        <div style={{ color: "red" }}>
          Note: Faucet claims are available only if your wallet holds less than
          2 USDC.
        </div>
        <Abstraxion />
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
};

export default Form;
