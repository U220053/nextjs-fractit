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

const inter = Inter({ subsets: ["latin"] });

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  const mintContractAddress = process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS;
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
          config={{
            contracts: [
              {
                address: mintContractAddress || "",
                amounts: [
                  {
                    denom:
                      "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64",
                    amount: "1000000",
                  },
                ],
              },
            ],
          }}
        >
          <Provider store={store}>{children}</Provider>
        </AbstraxionProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}

// export default function RootLayout({ children }) {
//   // Load contract address from environment variables
//   const mintContractAddress = process.env.NEXT_PUBLIC_MINT_CONTRACT_ADDRESS;
//   const ibcDenom = process.env.NEXT_PUBLIC_IBC_DENOM;

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <AbstraxionProvider
//           config={{
//             contracts: [
//               {
//                 address: mintContractAddress || "",
//                 amounts: [
//                   {
//                     denom:
//                       "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64",
//                     amount: "1000000",
//                   },
//                 ],
//               },
//             ],
//           }}
//         >
//           {children}
//         </AbstraxionProvider>
//       </body>
//     </html>
//   );
// }
