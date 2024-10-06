/*
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Abstraxion,
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal,
} from "@burnt-labs/abstraxion";
import { Button, Input } from "@burnt-labs/ui";
import { coins } from "@cosmjs/proto-signing";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import properties from "@/data/properties";

const nftContractAddress =
  "xion13cllmxz3npueh3krl0rfqlvgs8gcjzz2rek6da760mhcgmdwfs2qtsddc8";
const mintContractAddress = process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS ?? "";
const feeAmount = process.env.NEXT_PUBLIC_FEE_AMOUNT || "0";
const feeDenom = process.env.NEXT_PUBLIC_FEE_DENOM || "uxion";
const gasLimit = process.env.NEXT_PUBLIC_GAS_LIMIT || "500000";
const ibcDenom = process.env.NEXT_PUBLIC_IBC_DENOM ?? "";

const ContactWithAgent = ({ id }) => {
  const { data: account } = useAbstraxionAccount();
  const { client, logout } = useAbstraxionSigningClient();
  const [showAbstraxion, setShowAbstraxion] = useModal();
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [executeResult, setExecuteResult] = useState(undefined);
  const [mintAmount, setMintAmount] = useState("");
  const [usdcBalance, setUsdcBalance] = useState("0");
  const [mintNft, setMintNft] = useState(undefined);

  useEffect(() => {
    console.log("Account:", account);
    if (account && account.bech32Address != "") {
      setIsConnected(true);
      checkUsdcBalance();
      handleNumTokens();
    } else {
      setIsConnected(false);
      setUsdcBalance("0");
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

  const handleNumTokens = async () => {
    try {
      if (!client || !account) {
        throw new Error("Wallet not connected");
      }

      const queryMsg = { num_tokens: {} };
      console.log("Query Message:", queryMsg);

      const queryRes = await client.queryContractSmart(
        nftContractAddress,
        queryMsg
      );
      console.log("Query Result:", queryRes);

      setMintNft(queryRes.count);
    } catch (error) {
      console.error("Query error:", error);
    }
  };

  const handleMint = async () => {
    setLoading(true);

    try {
      if (!client || !account) {
        throw new Error("Wallet not connected");
      }

      console.log("Wallet Address:", account.bech32Address);
      const amount = parseInt(mintAmount) * 1000000;
      const mintMsg = { deposit: {} };
      const fee = {
        amount: coins(feeAmount, feeDenom),
        gas: gasLimit,
      };

      console.log("Mint Message:", mintMsg);
      console.log("Fee:", fee);

      const mintRes = await client.execute(
        account.bech32Address,
        mintContractAddress,
        mintMsg,
        {
          amount: [{ amount: "0", denom: "uxion" }],
          gas: "500000",
        },
        "",
        coins(amount, ibcDenom)
      );

      console.log("Mint Result:", mintRes);

      setExecuteResult(mintRes);
      toast.success("Token minted successfully!");
      checkUsdcBalance();
    } catch (error) {
      console.error("Minting error:", error);
      toast.error(`Minting failed`);
    } finally {
      setLoading(false);
    }
  };

  console.log("mintNft", mintNft);
  const property = properties?.find((item) => item.id == id) || properties[0];

  return (
    <div className="container mx-auto p-4 burnt-bg text-black">
      <div style={{ marginBottom: "10px" }}>STARTING AT : 1234</div>

      <header className="flex justify-between items-center mb-8">
        <div className="mb-4" style={{ margin: "10px" }}>
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={mintAmount}
            onChange={(e) => setMintAmount(e.target.value)}
            style={{ margin: "10px" }}
          />
        </div>
    
        <Button
          onClick={() => setShowAbstraxion(true)}
          style={{ backgroundColor: "#ff5a5f", color: "white" }}
          className=" btn btn-block btn-thm w-100"
        >
          {isConnected ? "VIEW ACCOUNT" : "CONNECT WALLET"}
        </Button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6"></div>
          <div className="mb-6">
            <div className="flex justify-between mt-2 ">
              <span style={{ color: "#ff5a5f" }} className="font-bold">
                Balance: {usdcBalance} USDC
              </span>
            </div>
          </div>

          {isConnected ? (
            <Button
              style={{ backgroundColor: "#ff5a5f", color: "white" }}
              className=" btn btn-block btn-thm w-100"
              onClick={handleMint}
              disabled={loading}
            >
              {loading ? "BUYING..." : "BUY NOW"}
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: "#ff5a5f", color: "white" }}
              className=" btn btn-block btn-thm w-100"
              onClick={() => setShowAbstraxion(true)}
            >
              CONNECT WALLET
            </Button>
          )}
        </div>
      </main>

      <Abstraxion
        onClose={() => {
          setShowAbstraxion(false);
        }}
      />
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ContactWithAgent;
*/
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Abstraxion,
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal,
} from "@burnt-labs/abstraxion";
import { Button, Input } from "@burnt-labs/ui";
import { coins } from "@cosmjs/proto-signing";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import properties from "@/data/properties";

const nftContractAddress =
  "xion13cllmxz3npueh3krl0rfqlvgs8gcjzz2rek6da760mhcgmdwfs2qtsddc8";
const mintContractAddress = process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS ?? "";
const feeAmount = process.env.NEXT_PUBLIC_FEE_AMOUNT || "0";
const feeDenom = process.env.NEXT_PUBLIC_FEE_DENOM || "uxion";
const gasLimit = process.env.NEXT_PUBLIC_GAS_LIMIT || "500000";
const ibcDenom = process.env.NEXT_PUBLIC_IBC_DENOM ?? "";

const ContactWithAgent = ({ id }) => {
  const { data: account } = useAbstraxionAccount();
  const { client, logout } = useAbstraxionSigningClient();
  const [showAbstraxion, setShowAbstraxion] = useModal();
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [executeResult, setExecuteResult] = useState(undefined);
  const [mintAmount, setMintAmount] = useState("");
  const [usdcBalance, setUsdcBalance] = useState("0");
  const [mintNft, setMintNft] = useState(undefined);

  useEffect(() => {
    if (account && account.bech32Address != "") {
      setIsConnected(true);
      checkUsdcBalance();
      handleNumTokens();
    } else {
      setIsConnected(false);
      setUsdcBalance("0");
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

  const handleNumTokens = async () => {
    try {
      if (!client || !account) {
        throw new Error("Wallet not connected");
      }

      const queryMsg = { num_tokens: {} };
      const queryRes = await client.queryContractSmart(
        nftContractAddress,
        queryMsg
      );

      setMintNft(queryRes.count);
    } catch (error) {
      console.error("Query error:", error);
    }
  };

  const handleMint = async () => {
    setLoading(true);

    try {
      if (!client || !account) {
        throw new Error("Wallet not connected");
      }

      const amount = parseInt(mintAmount) * 1000000;
      const mintMsg = { deposit: {} };

      const mintRes = await client.execute(
        account.bech32Address,
        mintContractAddress,
        mintMsg,
        {
          amount: [{ amount: "0", denom: "uxion" }],
          gas: "500000",
        },
        "",
        coins(amount, ibcDenom)
      );

      setExecuteResult(mintRes);
      toast.success("Token minted successfully!");
      checkUsdcBalance();
    } catch (error) {
      console.error("Minting error:", error);
      toast.error(`Minting failed`);
    } finally {
      setLoading(false);
    }
  };

  const property = properties?.find((item) => item.id == id) || properties[0];

  return (
    <div className="container mx-auto p-4 burnt-bg text-black">
      <div style={{ marginBottom: "10px" }}>STARTING AT : 1234</div>

      <header className="flex justify-between items-center mb-8">
        <div className="mb-4" style={{ margin: "10px" }}>
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={mintAmount}
            onChange={(e) => setMintAmount(e.target.value)}
            style={{ margin: "10px" }}
          />
        </div>
        <Button
          onClick={() => setShowAbstraxion(true)}
          style={{ backgroundColor: "#ff5a5f", color: "white" }}
          className=" btn btn-block btn-thm w-100"
        >
          {isConnected ? "VIEW ACCOUNT" : "CONNECT WALLET"}
        </Button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6"></div>
          <div className="mb-6">
            <div className="flex justify-between mt-2 ">
              <span style={{ color: "#ff5a5f" }} className="font-bold">
                Balance: {usdcBalance} USDC
              </span>
            </div>
          </div>

          {isConnected ? (
            id == 2 ? (
              <Button
                style={{ backgroundColor: "#ff5a5f", color: "white" }}
                className=" btn btn-block btn-thm w-100"
                onClick={handleMint}
                disabled={loading}
              >
                {loading ? "BUYING..." : "BUY NOW"}
              </Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "#ff5a5f",
                  color: "white",
                  cursor: "not-allowed",
                }}
                className=" btn btn-block btn-thm w-100"
                disabled
              >
                COMING SOON
              </Button>
            )
          ) : (
            <Button
              style={{ backgroundColor: "#ff5a5f", color: "white" }}
              className=" btn btn-block btn-thm w-100"
              onClick={() => setShowAbstraxion(true)}
            >
              CONNECT WALLET
            </Button>
          )}
        </div>
      </main>

      <Abstraxion
        onClose={() => {
          setShowAbstraxion(false);
        }}
      />
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ContactWithAgent;
