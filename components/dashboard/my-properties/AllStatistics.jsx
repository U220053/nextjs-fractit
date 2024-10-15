// const AllStatistics = () => {
//   const allStatistics = [
//     {
//       id: 1,
//       blockStyle: "",
//       icon: "flaticon-home",
//       timer: "01",
//       name: "Owned Properties",
//     },
//     {
//       id: 2,
//       blockStyle: "style2",
//       icon: "flaticon-view",
//       timer: "12",
//       name: "Total Tokens",
//     },
//     {
//       id: 3,
//       blockStyle: "style3",
//       icon: "flaticon-chat",
//       timer: "$12",
//       name: "Total Value Of Tokens",
//     },
//     {
//       id: 4,
//       blockStyle: "style4",
//       icon: "flaticon-heart",
//       timer: "91%",
//       name: "ROI(5 years)",
//     },
//   ];

//   return (
//     <>
//       {allStatistics.map((item) => (
//         <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3" key={item.id}>
//           <div className={`ff_one ${item.blockStyle}`}>
//             <div className="detais">
//               <div className="timer">{item.timer}</div>
//               <p>{item.name}</p>
//             </div>

//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default AllStatistics;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Abstraxion,
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal,
} from "@burnt-labs/abstraxion";
import Link from "next/link";

import "react-toastify/dist/ReactToastify.css";
import properties from "@/data/properties";

// Mapping of property IDs to their respective CW20 addresses
const propertyCw20Addresses = {
  2: "xion1gtvfxt2nhy42hrqcz437vpeujr9dk5jf4re507qv203ud35xnwms0rwrf0",
  // Add more properties and their CW20 addresses here if needed
};

const AllStatistics = () => {
  const { data: account } = useAbstraxionAccount();
  const { client } = useAbstraxionSigningClient();
  const [isConnected, setIsConnected] = useState(false);
  const [mintNft, setMintNft] = useState({}); // Store token balances for all properties
  const [buttonText, setButtonText] = useState("Claim Yield");

  useEffect(() => {
    if (account && account.bech32Address !== "") {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }

    // Fetch token balances for all properties
    if (client && account?.bech32Address) {
      handleNumTokensForAllProperties();
    }
  }, [account, client]);

  const handleNumTokensForAllProperties = async () => {
    const balances = {};

    // Loop through properties and query balance for each based on CW20 address
    for (const property of properties) {
      const cw20Address = propertyCw20Addresses[property.id];

      if (cw20Address) {
        try {
          const balanceQueryMsg = {
            balance: {
              address: account.bech32Address,
            },
          };

          const balanceResponse = await client.queryContractSmart(
            cw20Address,
            balanceQueryMsg
          );
          const totalSupply = Math.floor(balanceResponse.balance / 1000000);
          balances[property.id] = totalSupply; // Store balance for this property
        } catch (error) {
          console.error(
            `Error querying balance for property ${property.id}:`,
            error
          );
          balances[property.id] = "0"; // In case of error, store a default value
        }
      } else {
        balances[property.id] = "0"; // If no CW20 address, show "Coming Soon"
      }
    }

    setMintNft(balances); // Update state with the token balances
  };
  const allStatistics = [
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "01",
      name: "Owned Properties",
    },
    {
      id: 2,
      blockStyle: "style2",
      icon: "flaticon-view",
      timer: mintNft[2] || "Loading...",
      name: "Total Tokens",
    },
    {
      id: 3,
      blockStyle: "style3",
      icon: "flaticon-chat",
      timer: mintNft[2] || "Loading...",
      name: "Total Value Of Tokens",
    },
    {
      id: 4,
      blockStyle: "style4",
      icon: "flaticon-heart",
      timer: "91%",
      name: "ROI (5 years)",
    },
  ];
  return (
    <>
      {allStatistics.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3" key={item.id}>
          <div className={`ff_one ${item.blockStyle}`}>
            <div className="detais">
              <div className="timer">{item.timer}</div>
              <p>{item.name}</p>{" "}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllStatistics;
