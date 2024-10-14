import properties from "@/data/properties";

const AdditionalDetails = ({ id }) => {
  const property = properties?.find((item) => item.id == id) || properties[0];

  return (
    <>
      <div className="col-md-6 col-lg-6">
        <ul className="list-inline-item">
          <li>
            <p>
              Token Symbol : <span>{property?.tokensymbol}</span>
            </p>
          </li>
          <li>
            <p>
              Token Price : <span>{property?.tokenprice}</span>
            </p>
          </li>
          <li>
            <p>
              Rental Yield (Estm.) : <span>{property?.rentalyeild}</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-6">
        <ul className="list-inline-item">
          <li>
            <p>
              Capital Appriciation(Estm.) :{" "}
              <span>{property?.capitalappreciation}</span>
            </p>
          </li>
          <li>
            <p>
              Estimated ROI (5 years) : <span>{property?.roi}</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdditionalDetails;
