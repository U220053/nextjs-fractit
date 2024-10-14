import Image from "next/image";
import properties from "@/data/properties";

const PropertyLocation = ({ id }) => {
  const property = properties?.find((item) => item.id == id) || properties[0];

  return (
    <>
      <div className="thumb">
        <div className="h400" id="map-canvas">
          {/* <div className="gmap_canvas ">
            <iframe
              title="map"
              className="gmap_iframe"
              src="https://www.google.com/maps/d/embed?mid=1tJl0-uRax4AKBfbh1eLPLX5WzOk&hl=en&ehbc=2E312F"
            ></iframe>
          </div> */}
          <div className="gmap_canvas">
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14453.295803379557!2d77.1822411!3d31.0672349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057f1de8f920f5%3A0x8c47542413694930!2sCliffton%20Valley!5e1!3m2!1sen!2sin!4v1727859123669!5m2!1sen!2sin"
              src={property?.loc}
              className="gmap_iframe"
              title="map"
            ></iframe>
          </div>
        </div>
        <div className="overlay_icon">
          <a href="#">
            <Image
              width={40}
              height={45}
              className="map_img_icon"
              src="/assets/images/header-logo.png"
              alt="header-logo.png"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default PropertyLocation;
