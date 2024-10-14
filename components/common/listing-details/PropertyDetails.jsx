import properties from "@/data/properties";

const PropertyDetails = ({ id }) => {
  const property = properties?.find((item) => item.id == id) || properties[0];

  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property ID : <span>{property?.posterName}</span>
            </p>
          </li>
          <li>
            <p>
              Price : <span>${property?.price}</span>
            </p>
          </li>
          <li>
            <p>
              Property Size : <span>{property?.itemDetails[2].number}</span>
            </p>
          </li>
          <li>
            <p>
              Year Built : <span>{property.built}</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Bedrooms : <span> {property?.itemDetails[0]?.number}</span>
            </p>
          </li>
          <li>
            <p>
              Bathrooms : <span> {property?.itemDetails[1]?.number}</span>
            </p>
          </li>
          <li>
            <p>
              Parking : <span>{property?.garages}</span>
            </p>
          </li>
          {/* <li>
            <p>
              Garage Size : <span>200 SqFt</span>
            </p>
          </li> */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property Type : <span>Apartment</span>
            </p>
          </li>
          <li>
            <p>
              Property Status : <span>For Sale</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
