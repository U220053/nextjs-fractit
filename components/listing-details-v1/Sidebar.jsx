"use client";
import ContactWithAgent from "../common/agent-view/ContactWithAgent";
import Categorie from "../common/listing/Categorie";
import ListingCreator from "../common/listing/ListingCreator";
import FeaturedListings from "../common/listing/FeaturedListings";
import FeatureProperties from "../common/listing/FeatureProperties";
import { useParams } from "next/navigation"; // Import useParams for getting dynamic route parameters

const Sidebar = () => {
  const params = useParams(); // Use useParams to access dynamic route parameters
  const { id } = params; // Extract id from params
  return (
    <>
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          {/* End .sl_creator */}
          <ContactWithAgent id={id} />
        </div>
      </div>
      {/* End .sidebar_listing_list */}
    </>
  );
};

export default Sidebar;
