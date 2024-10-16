"use client";

import Link from "next/link";

import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const pathname = usePathname();

  const myProperties = [
    { id: 1, name: "General Elements", route: "/my-properties" },
    { id: 2, name: "Advanced Elements", route: "/my-properties" },
    { id: 3, name: "Editors", route: "/my-properties" },
  ];
  // const reviews = [
  //   { id: 1, name: "My Reviews", route: "/my-review" },
  //   { id: 2, name: "Visitor Reviews", route: "/my-review" },
  // ];
  const manageAccount = [
    {
      id: 2,
      name: "My Profile",
      route: "/account",
      icon: "flaticon-user",
    },
    { id: 3, name: "Logout", route: "/account", icon: "flaticon-logout" },
  ];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
            <Image
              width={200}
              height={100}
              src="/assets/images/Logo_white-blue.svg"
              alt="header-logo2.png"
            />
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Main</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/account", pathname) ? "active" : ""
              }`}
            >
              <Link href="/account">
                <i className="flaticon-layers"></i>
                <span> Dashboard</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/faucet", pathname) ? "active" : ""
              }`}
            >
              <Link href="/faucet">
                <i className="flaticon-layers"></i>
                <span> Faucet </span>
              </Link>
            </li>
            {/* <li
              className={`treeview ${
                isSinglePageActive("/create-listing", pathname) ? "active" : ""
              }`}
            >
              <Link href="/create-listing">
                <i className="flaticon-plus"></i>
                <span> Create Listing</span>
              </Link>
            </li> */}
            {/* <li
              className={`treeview ${
                isSinglePageActive("/my-message", pathname) ? "active" : ""
              }`}
            >
              <Link href="/my-message">
                <i className="flaticon-envelope"></i>
                <span> Message</span>
              </Link>
            </li> */}
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <span>Coming Soon</span>
          <ul>
            <li
              className={`treeview ${
                isParentPageActive(myProperties, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="">
                <i className="flaticon-home"></i> <span>Investments</span>
                {/* <i className="fa fa-angle-down pull-right"></i> */}
              </a>
              {/* <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </li>
            {/* end properties */}

            <li
            // className={`treeview ${
            //   isParentPageActive(reviews, pathname) ? "active" : ""
            // }`}
            >
              <a data-bs-toggle="collapse" href="">
                <i className="flaticon-chat"></i>
                <span>Reviews</span>
                {/* <i className="fa fa-angle-down pull-right"></i> */}
              </a>
              {/* <ul className="treeview-menu collapse" id="review">
                {reviews.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </li>
            {/* End Review */}

            <li
            // className={`treeview ${
            //   isSinglePageActive("/account", pathname) ? "active" : ""
            // }`}
            >
              <Link href="/account">
                <i className="flaticon-heart"></i>
                <span> My Favorites</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/my-saved-search", pathname) ? "active" : ""
              }`}
            >
              <Link href="">
                <i className="flaticon-magnifying-glass"></i>
                <span> Transactions</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End manage listing */}

        <li className="title">
          <span>Coming Soon</span>
          <ul>
            {manageAccount.map((item) => (
              <li
                // className={
                //   isSinglePageActive(item.route, pathname) ? "active" : ""
                // }
                key={item.id}
              >
                <Link href={item.route}>
                  <i className={item.icon}></i> <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
