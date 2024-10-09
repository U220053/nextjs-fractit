// import img from "../../../public/assets/images/myimage/Frame 102.png";
// import Image from "next/image";

// const BreadcrumbBanner3 = () => {
//   return (
//     <section className="">
//       <div>
//         <div>
//           <div>
//             {/* <div style={{ marginBottom: "-8rem" }}> */}
//             <div>
//               {/* <BreadCrumb title="a" /> */}
//               <Image src={img} width="1920px" />
//             </div>
//           </div>
//           {/* End .col */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BreadcrumbBanner3;
// import img from "../../../public/assets/images/myimage/Frame 102.png";
import img from "../../../public/assets/images/myimage/Untitled design.png";
import Image from "next/image";

const BreadcrumbBanner3 = () => {
  return (
    <section className="" style={{ width: "100%", height: "60vh" }}>
      {" "}
      {/* Set the section height to cover the viewport */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={img}
          layout="fill" // Makes the image fill its container
          objectFit="cover" // Ensures the image covers the entire container while maintaining aspect ratio
          alt="Banner Image"
        />
      </div>
    </section>
  );
};

export default BreadcrumbBanner3;
