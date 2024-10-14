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

const cw20Address =
  "xion1gtvfxt2nhy42hrqcz437vpeujr9dk5jf4re507qv203ud35xnwms0rwrf0";
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
  const [mintAmount, setMintAmount] = useState("1");
  const [usdcBalance, setUsdcBalance] = useState("0");
  const [mintNft, setMintNft] = useState(undefined);
  const [inputError, setInputError] = useState("");
  // const [transactionHash, setTransactionHash] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

  useEffect(() => {
    // if (account && account.bech32Address != "") {
    //   setIsConnected(true);
    //   checkUsdcBalance();
    //   handleNumTokens();
    // } else {
    //   setIsConnected(false);
    //   setUsdcBalance("0");
    // }
    if (account && account.bech32Address != "") {
      setIsConnected(true);
      checkUsdcBalance();
    } else {
      setIsConnected(false);
      setUsdcBalance("0");
    }

    // Always check the number of tokens regardless of connection status
    handleNumTokens();
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
      const balanceQueryMsg = {
        token_info: {},
      };
      console.log("nitu");
      const balanceResponse = await client.queryContractSmart(
        cw20Address,
        balanceQueryMsg
      );
      // console.log("balanceResponse", balanceResponse);
      // setMintNft(balanceResponse.total_supply / 1000000);
      // console.log("balanceResponse", balanceResponse.total_supply);
      const totalSupply = Math.floor(balanceResponse.total_supply / 1000000);
      setMintNft(totalSupply);
    } catch (error) {
      console.error("Query error:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (
      value === "" ||
      (Number(value) >= 1 &&
        Number(value) <= 20 &&
        Number.isInteger(Number(value)))
    ) {
      setMintAmount(value);
      setInputError("");
    } else {
      setInputError("Please enter a whole number between 1 and 20.");
    }
  };

  const handleMint = async () => {
    if (inputError || mintAmount === "") {
      toast.error("Please enter a valid amount before minting.");
      return;
    }

    setLoading(true);

    try {
      if (!client || !account) {
        throw new Error("Wallet not connected");
      }

      const amount = parseInt(1) * 1000000;
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
      setTransactionHash(mintRes.transactionHash);
      await checkUsdcBalance();
      await handleNumTokens();
      // checkUsdcBalance();
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
      <div style={{ marginBottom: "10px" }}>
        {id == 2 ? (
          <>
            <div>Token Symbol: FJWHM</div> <div>Token Price: 1 USDC </div>
            <div>
              Token Sold:{" "}
              <span className="font-bold">
                {mintNft !== undefined ? mintNft.toString() : "0"}
              </span>
              /365,000
            </div>
          </>
        ) : id == 1 ? (
          <>Token Purchased: 235/235</>
        ) : (
          <>Coming Soon</>
        )}
      </div>
      {id == 2 ? (
        <></>
      ) : (
        <>
          {" "}
          <header className="flex justify-between items-center mb-8">
            <div className="mb-4" style={{ margin: "10px" }}>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount (1-20)"
                value={mintAmount}
                onChange={handleInputChange}
                min="1"
                max="20"
                style={{ margin: "10px" }}
              />
              {inputError && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {inputError}
                </div>
              )}
            </div>
          </header>
        </>
      )}

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6"></div>
          <div className="mb-6">
            <div className="flex justify-between mt-2 ">
              <span style={{ color: "#3b82f6" }} className="font-bold">
                Wallet Balance: {usdcBalance} USDC
              </span>
            </div>
          </div>

          {/* {isConnected ? (
            id == 2 ? (
              <Button
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  borderColor: "#3b82f6",
                }}
                className="btn btn-block btn-thm w-100"
                onClick={handleMint}
                disabled={loading || !!inputError || mintAmount === ""}
              >
                {id == 2
                  ? loading
                    ? "MINTING..."
                    : "MINT 1 TOKEN"
                  : loading
                  ? "MINTING..."
                  : "MINT"}
             
              </Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  cursor: "not-allowed",
                }}
                className="btn btn-block btn-thm w-100"
                disabled
              >
                COMING SOON
              </Button>
            )
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
              CONNECT WALLET
            </Button>
          )} */}
          {isConnected ? (
            id == 2 ? (
              <Button
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  borderColor: "#3b82f6",
                }}
                className="btn btn-block btn-thm w-100"
                onClick={handleMint}
                disabled={loading || !!inputError || mintAmount === ""}
              >
                {transactionHash
                  ? "Successful"
                  : loading
                  ? "MINTING..."
                  : "BUY 1 TOKEN"}
              </Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  cursor: "not-allowed",
                }}
                className="btn btn-block btn-thm w-100"
                disabled
              >
                COMING SOON
              </Button>
            )
          ) : (
            <>
              <Button
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  borderColor: "#3b82f6",
                }}
                className="btn btn-block btn-thm w-100"
                onClick={() => setShowAbstraxion(true)}
              >
                LOG IN
              </Button>
            </>
          )}
          {transactionHash && (
            <div className="mt-4">
              <p>Transaction Successful!</p>
              <p
                style={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
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
        </div>
        <h4 className="mb30" style={{ fontWeight: "bold", color: "red" }}>
          Disclaimer: To ensure wider token distribution, we've implemented a
          daily mint limit.
        </h4>
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
