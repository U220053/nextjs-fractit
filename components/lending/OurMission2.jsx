// import PopupVideo from "../../components/common/PopupVideo";

// const OurMission2 = () => {
//   const missionContent = [
//     {
//       id: 1,
//       icon: "No Need to Sell",
//       number: "80,123",
//       meta: "Keep your property ownership while accessing capital.",
//     },
//     {
//       id: 2,
//       icon: "Smart Contracts",
//       number: "$74 Billion",
//       meta: ": Automated, secure transactions without intermediaries.",
//     },
//     {
//       id: 3,
//       icon: "Flexible Repayment",
//       number: "$468 Million",
//       meta: "Choose terms that suit your financial needs.",
//     },
//   ];

//   return (
//     <>
//       <div className="col-lg-8 col-xl-7">
//         <div className="about_content">
//           <p className="large">
//             FractIt allows you to leverage your tokenized real estate assets for
//             flexible loans. Access liquidity without selling your property
//             shares.
//           </p>

//           {/* <p>
//             Maecenas quis viverra metus, et efficitur ligula. Nam congue augue
//             et ex congue, sed luctus lectus congue. Integer convallis
//             condimentum sem. Duis elementum tortor eget condimentum tempor.
//             Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero
//             ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor
//             sit amet, consectetur adipisicing elit. Quod libero amet, laborum
//             qui nulla quae alias tempora.
//           </p> */}

//           <ul className="ab_counting">
//             {missionContent.map((item) => (
//               <li className="list-inline-item" key={item.id}>
//                 <div className="about_counting">
//                   <div className="icon">
//                     <span className={`${item.icon}`}></span>
//                   </div>
//                   <div className="details">
//                     <h3>{item.number}</h3>
//                     <p>{item.meta}</p>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           {/* End .ab_counting */}
//         </div>
//       </div>
//       {/* End .col */}

//       <div className="col-lg-4 col-xl-5">
//         <div className="about_thumb">
//           <img
//             className="img-fluid w100 cover"
//             src="/assets/images/about/1.jpg"
//             alt="1.jpg"
//           />
//           <PopupVideo />
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurMission2;
import PopupVideo from "../common/PopupVideo";
import Image from "next/image";

const OurMission2 = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "80,123",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "$74 Billion",
      meta: "In home sales",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "$468 Million",
      meta: "In Savings",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7" style={{ marginTop: "4rem" }}>
        <div className="about_content">
          <p className="large">Unlock the Value of Your Property Holdings</p>
          <p>
            FractIt’s lending feature allows users to unlock liquidity by using
            their Fractible tokens as collateral. Property owners can leverage
            their tokenized real estate holdings to secure loans without selling
            their assets, offering a flexible way to access funds while
            retaining ownership. This innovative lending solution provides fast
            access to capital with the security of blockchain-backed real estate
            assets.
          </p>
          {/* <p>
            <span style={{ fontWeight: "bold" }}> FractIt Advantage</span> -No
            Need to Sell: Keep your property ownership while accessing capital.
            -Smart Contracts: Automated, secure transactions without
            intermediaries. -Flexible Repayment: Choose terms that suit your
            financial needs.
          </p> */}
          <p>
            <span style={{ fontWeight: "bold" }}> FractIt Advantage</span>{" "}
            <br />
            - No Need to Sell: Keep your property ownership while accessing
            capital.
            <br />
            - Smart Contracts: Automated, secure transactions without
            intermediaries.
            <br />- Flexible Repayment: Choose terms that suit your financial
            needs.
          </p>

          {/* <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            className="img-fluid w100 cover"
            src="/assets/images/myimage/Frame 103.png"
            alt="1.jpg"
            width={400}
            height={400}
          />
          {/* <PopupVideo /> */}
        </div>
      </div>
    </>
  );
};

export default OurMission2;
