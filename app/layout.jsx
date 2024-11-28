"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import ScrollToTop from "@/components/common/ScrollTop";
import "../public/assets/scss/index.scss";
import { Inter } from "next/font/google";
// import "./globals.css";
import { AbstraxionProvider } from "@burnt-labs/abstraxion";
import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";
import { tr } from "@faker-js/faker";

const inter = Inter({ subsets: ["latin"] });

const treasuryConfig = {
  treasury: "xion1h82c0efsxxq4pgua754u6xepfu6avglup20fl834gc2ah0ptgn5s2zffe9",
  // treasury: "xion12wsk5fuflknrnf57743f30s5ypml6tfrfukzg3qemp4u0chgeamspgfwv2",
};

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  const mintContractAddress = process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS;
  const mintContractAddress2 = process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS2;

  const ibcDenom = process.env.NEXT_PUBLIC_IBC_DENOM;
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L74W16HWCV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L74W16HWCV');
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        />
        <link rel="icon" href="./favicon.ico" />
      </head>
      ``
      <body className={inter.className}>
        <AbstraxionProvider
          // config={{

          //   contracts: [
          //     {
          //       address: mintContractAddress || "",
          //       amounts: [
          //         {
          //           denom:
          //             "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64",
          //           amount: "1000000",
          //         },
          //       ],
          //     },
          //     {
          //       address:
          //         "xion13ccaczqvafslzd2r02whrpaw0atjuufldc5twntqz6xpn8e6shssddh5yj",
          //       amounts: [
          //         {
          //           denom: "uxion",
          //           amount: "500000",
          //         },
          //       ],
          //     },
          //     {
          //       address:
          //         "xion19ywxhuxrf504c8wzf7sxg3scxxyhtxld7z73lv3nzer52sv7d2ws7c7zap" ||
          //         "",
          //       amounts: [
          //         {
          //           denom:
          //             "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64",
          //           amount: "10000000",
          //         },
          //       ],
          //     },
          //   ],
          // }}
          config={treasuryConfig}
        >
          <Provider store={store}>{children}</Provider>
        </AbstraxionProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
