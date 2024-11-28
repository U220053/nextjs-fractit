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
import twitter from "../../../public/assets/images/Twitter.svg";
import discord from "../../../public/assets/images/Discord.svg";
import insta from "../../../public/assets/images/insta.svg";

const cw20Address =
  "xion1gtvfxt2nhy42hrqcz437vpeujr9dk5jf4re507qv203ud35xnwms0rwrf0";
const GRANTER_ADDRESS =
  "xion12wsk5fuflknrnf57743f30s5ypml6tfrfukzg3qemp4u0chgeamspgfwv2";
const mintContractAddress = process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS ?? "";
const feeAmount = process.env.NEXT_PUBLIC_FEE_AMOUNT || "0";
const feeDenom = process.env.NEXT_PUBLIC_FEE_DENOM || "uxion";
const gasLimit = process.env.NEXT_PUBLIC_GAS_LIMIT || "500000";
const ibcDenom = process.env.NEXT_PUBLIC_IBC_DENOM ?? "";

const FollowUs = ({ id }) => {
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
          granter: GRANTER_ADDRESS,
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
    <>
      <div className="">
        <div
          className="follow_us_widget"
          style={{ textAlign: "left", fontWeight: "bold" }}
        >
          <h4 style={{ marginBottom: "10px" }}>Follow Us</h4>
          <ul
            className="social_links"
            style={{ display: "flex", justifyContent: "left", gap: "15px" }}
          >
            <li>
              <a
                href="https://twitter.com/FractItLabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} alt="twitter" width={50} height={50} />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/dJDKZTqMHq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={discord} alt="discord" width={60} height={60} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/FractItLabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={insta}
                  alt="insta"
                  width={60}
                  height={60}
                  style={{ marginTop: "-8px" }}
                />
              </a>
            </li>
          </ul>
          <p style={{ marginTop: "10px" }}>
            Stay connected and never miss an update on mission{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
