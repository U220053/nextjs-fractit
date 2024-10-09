import BreadCrumb from "../common/BreadCrumb";
import img from "../../public/assets/images/myimage/Frame 102.png";
import Image from "next/image";

const BreadcrumbBanner3 = () => {
  const sectionStyle = {
    position: "relative",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "400px", // Set the height as per your design
    overflow: "hidden",
  };

  const breadcrumbContentStyle = {
    position: "absolute",
    top: "50%", // Center vertically (can adjust if needed)
    left: "20px", // Set the left position for text
    transform: "translateY(-50%)", // Center vertically based on the height of the text
    color: "white",
    textAlign: "left", // Align text to the left
    zIndex: 1,
  };

  const breadcrumbTitleStyle = {
    width: "70%",
    fontSize: "30px", // Adjust font size as needed
    fontWeight: "bold",
  };

  return (
    <section style={sectionStyle}>
      <div style={imageContainerStyle}>
        <Image src={img} layout="fill" objectFit="cover" alt="Banner Image" />
        <div style={breadcrumbContentStyle}>
          {/* <BreadCrumb title="a" /> */}
          <h1 style={breadcrumbTitleStyle}>
            FractIt REIT: Diversified Real Estate Investment at Your Fingertips
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbBanner3;
