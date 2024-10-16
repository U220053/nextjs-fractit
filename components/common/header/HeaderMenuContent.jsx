// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const HeaderMenuContent = ({ float = "" }) => {
//   const pathname = usePathname();

//   return (
//     <ul
//       id="respMenu"
//       className="ace-responsive-menu text-end d-lg-block d-none"
//       data-menu-style="horizontal"
//     >
//       <li className="last">
//         <Link
//           href="/reit"
//           className={pathname === "/reit" ? "ui-active" : undefined}
//         >
//           Reit
//         </Link>
//       </li>
//       <li className="last">
//         <Link
//           href="/landing"
//           className={pathname === "/landing" ? "ui-active" : undefined}
//         >
//           Lending
//         </Link>
//       </li>
//       <li className="last">
//         <Link
//           href="/account"
//           className={pathname === "/landing" ? "ui-active" : undefined}
//         >
//           Account
//         </Link>
//       </li>
//       {/* <li className={`list-inline-item list_s ${float}`}>
//         <a
//           href="#"
//           className="btn flaticon-user"
//           data-bs-toggle="modal"
//           data-bs-target=".bd-example-modal-lg"
//         >
//           <span className="dn-lg">Login/Register</span>
//         </a>
//       </li>             );
//             })
//               ? "ui-active"
//               : undefined
//           }
//         >
//           <span className="title">Property</span>{" "}
//           <span className="arrow"></span>
//         </a>
//         <ul className="sub-menu ">
//           {property.map((item) => (
//             <li className="dropitem arrow" key={item.id}>
//               <a
//                 href="#"
//                 className={
//                   item.items.some(
//                     (page) =>
//                       page.routerPath?.split("/")[1] === pathname?.split("/")[1]
//                     // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
//                   )
//                     ? "ui-active"
//                     : undefined
//                 }
//               >*/}
//       {/* End .dropitem */}

//       <li className={`list-inline-item add_listing ${float}`}>
//         <Link href="/create-listing">
//           <span className="flaticon-plus"></span>
//           <span className="dn-lg"> Connect Wallet</span>
//         </Link>
//       </li>
//       {/* End .dropitem */}
//     </ul>
//   );
// };

// export default HeaderMenuContent;
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@burnt-labs/ui";
import {
  Abstraxion,
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal,
} from "@burnt-labs/abstraxion";

const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();
  const { data: account } = useAbstraxionAccount();
  const { client, logout } = useAbstraxionSigningClient();
  const [showAbstraxion, setShowAbstraxion] = useModal();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (account && account.bech32Address !== "") {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [account]);

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      {/* <li className="last">
        <Link
          href="https://fractit.com/"
          // className={pathname === "/reit" ? "ui-active" : undefined}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for external link
        >
          Home
        </Link>
      </li> */}
      <li className="last">
        <Link href="/#" className={pathname === "/" ? "ui-active" : undefined}>
          Properties
        </Link>
      </li>
      <li className="last">
        <Link
          href="/reit"
          className={pathname === "/reit" ? "ui-active" : undefined}
        >
          REIT
        </Link>
      </li>
      <li className="last">
        <Link
          href="/lending"
          className={pathname === "/lending" ? "ui-active" : undefined}
        >
          Lending
        </Link>
      </li>
      <li className="last">
        <Link
          href="/account"
          className={pathname === "/account" ? "ui-active" : undefined}
        >
          Account
        </Link>
      </li>
      <li className="last">
        <Link
          href="/faucet"
          className={pathname === "/faucet" ? "ui-active" : undefined}
        >
          Faucet
        </Link>
      </li>

      {/* Wallet Connect/Account View Button */}
      <li>
        <Button
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            borderColor: "#3b82f6",
          }}
          onClick={() => setShowAbstraxion(true)}
        >
          {isConnected ? "LOG OUT" : "LOG IN"}
        </Button>
      </li>

      {/* Wallet Modal */}
      <Abstraxion
        onClose={() => {
          setShowAbstraxion(false);
        }}
      />
    </ul>
  );
};

export default HeaderMenuContent;
