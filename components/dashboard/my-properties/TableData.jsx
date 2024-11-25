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
  3: "xion1nppxz2m32shx63qn9yjfwzrg7wkljuhuf6gwuypl7k577u7la75sgxyfrx",
  // Add more properties and their CW20 addresses here if needed
};

const TableData = () => {
  let theadContent = ["Listing Title", "My Holding", "Action (Coming Soon)"];

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
  const handleMouseEnter = () => {
    setButtonText("Coming Soon");
  };

  const handleMouseLeave = () => {
    setButtonText("Sell");
  };

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
  let tbodyContent = properties?.slice(0, 6)?.map((item) => (
    // const tbodyContent = properties?.map((item)
    <tr key={item.id}>
      <td scope="row">
        <Link href={`/listing-details-v1/${item.id}`} passHref>
          <div className="feat_property list favorite_page style2">
            <div className="thumb">
              <Image
                width={150}
                height={220}
                className="img-whp cover"
                src={item?.img1}
                alt={item.title}
              />
              {/* <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">For Rent</a>
                </li>
              </ul>
            </div> */}
            </div>
            <div className="details">
              <div className="tc_content">
                <h4>{item.title}</h4>
                <p>
                  <span className="flaticon-placeholder"></span>
                  {item.location}
                </p>
                <a className="fp_price " href="#" style={{ color: "#3b82f6" }}>
                  Property Value: ${item.price}
                </a>
              </div>
            </div>
          </div>
        </Link>
      </td>

      {/* <td>30 December, 2020</td>

      <td>
        <span className="status_tag badge">Pending</span>
      </td> */}

      <td>
        {mintNft[item.id] !== undefined ? (
          <span>{mintNft[item.id]}</span>
        ) : (
          <span>Loading...</span>
        )}
      </td>

      <td>
        <ul className="view_edit_delete_list mb0">
          {/* <li
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Edit"
          >
            <a href="#">
              <span className="flaticon-edit"></span>
            </a>
          </li>

          <li
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete"
          >
            <a href="#">
              <span className="flaticon-garbage"></span>
            </a>
          </li> */}
          {/* <button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              borderColor: "#3b82f6",
            }}
            className="btn btn-block btn-thm w-100"
          >
            Claim Yield
          </button> */}
          <button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              borderColor: "#3b82f6",
              cursor: "not-allowed",
            }}
            className="btn btn-block btn-thm w-100 hover-text"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Claim Yield
          </button>

          <button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              borderColor: "#3b82f6",
              cursor: "not-allowed",
            }}
            className="btn btn-block btn-thm w-100"
          >
            Sell
          </button>
        </ul>
      </td>
    </tr>
  ));

  return (
    <>
      <table className="table">
        <thead className="thead-light" style={{ whiteSpace: "nowrap" }}>
          <tr>
            {theadContent.map((value, i) => (
              <th scope="col" key={i}>
                {value}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{tbodyContent}</tbody>
      </table>

      <Abstraxion />
    </>
  );
};

export default TableData;
