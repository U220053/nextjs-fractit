"use client";

// import "react-pro-sidebar/dist/css/styles.css";
import React, { useState, useEffect } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  Sidebar,
} from "react-pro-sidebar";
import Link from "next/link";
import { Button } from "@burnt-labs/ui";
import {
  Abstraxion,
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal,
} from "@burnt-labs/abstraxion";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const MobileMenuContent = () => {
  const pathname = usePathname();
  const router = useRouter();
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
    <>
      <div className="sidebar-header">
        <Link
          href="/"
          className="sidebar-header-inner"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer"
        >
          <Image
            width={100}
            height={45}
            className="nav_logo_img img-fluid mt20"
            src="/assets/images/logo_black-blue.png"
            alt="header-logo.png"
          />
        </Link>
        {/* End .logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <span className="flaticon-close"></span>
        </div>
        {/* Mobile Menu close icon */}
      </div>

      {/* End logo */}
      {/* <Sidebar> */}
      <div style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
        <Menu>
          <MenuItem>
            <a href="https://fractit.com/">Home</a>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => router.push("/")}
              className={
                pathname === "/" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              Properties
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => router.push("/reit")}
              className={
                pathname === "/reit" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              REIT
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => router.push("/landing")}
              className={
                pathname === "/landing" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              Lending
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => router.push("/account")}
              className={
                pathname === "/account" ? "ui-active" : "inactive-mobile-menu"
              }
            >
              Account
            </div>
          </MenuItem>
          <MenuItem>
            <Button
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                borderColor: "#3b82f6",
              }}
              onClick={() => {
                if (isConnected) {
                  logout();
                } else {
                  setShowAbstraxion(true);
                }
              }}
            >
              {isConnected ? "LOG OUT" : "CONNECT WALLET"}
            </Button>
          </MenuItem>
          {/* Wallet Modal */}
          <Abstraxion
            onClose={() => {
              setShowAbstraxion(false);
            }}
          />
        </Menu>
      </div>
    </>
  );
};

export default MobileMenuContent;
