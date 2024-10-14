"use client";
import { useParams } from "next/navigation"; // Import useParams for getting dynamic route parameters

import properties from "@/data/properties";
import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import PropertyVideo from "../common/listing-details/PropertyVideo";
import WalkScore from "../common/listing-details/WalkScore";
import WhatsNearby from "../common/listing-details/WhatsNearby";

const DetailsContent = () => {
  const params = useParams(); // Use useParams to access dynamic route parameters
  const { id } = params; // Extract id from params

  console.log("id", id); // For debugging purposes
  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list ">
          <PropertyItem id={id} />
        </div>
        {/* End .lsd_list */}
        <h4 className="mb30" style={{ fontWeight: "bold", color: "red" }}>
          Disclaimer:{" "}
          {/* <p style={{ color: "red", marginBottom: "10px", fontWeight: "bold" }}> */}
          This is a test listing on the Fractit testnet platform. The properties
          and details provided are for testing purposes only. Tokens minted here
          are test tokens with no real-world value and do not represent
          ownership or rights to any actual assets.
          {/* </p> */}
        </h4>

        <h4 className="mb30" style={{ fontWeight: "bold" }}>
          Description
        </h4>

        <PropertyDescriptions id={id} />
      </div>
      {/* End .listing_single_description */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Property Details</h4>
          </div>
          <PropertyDetails id={id} />
        </div>
      </div>
      {/* End .application_statics mt30 */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15 ">Token details</h4>
          </div>
          <AdditionalDetails id={id} />
        </div>
      </div>
      {/* End .application_statics mt30 */}

      {/* <div className="property_attachment_area">
        <h4 className="mb30">Property Attachments</h4>
        <div className="iba_container style2">
          <Attachments />
        </div>
      </div> */}
      {/* End .property_attachment_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb10">Features</h4>
          </div>
          {/* End .col */}

          <PropertyFeatures id={id} />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">Location </h4>
        <div className="property_video p0">
          <PropertyLocation id={id} />
        </div>
      </div>
      {/* End .location_area */}

      {/* End .floor_plane */}

      {/* End property-video  */}

      {/* <div className="walkscore_area mt30">
        <WalkScore />
      </div> */}
      {/* End walkscore_area */}

      {/* End what's nearby area */}

      {/* End review and comment area area */}
    </>
  );
};

export default DetailsContent;
