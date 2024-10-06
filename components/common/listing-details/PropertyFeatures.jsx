import properties from "@/data/properties";

const PropertyFeatures = ({ id }) => {
  const property = properties?.find((item) => item.id == id) || properties[0];
  const propertyFeatures = property?.propertyFeatures || [];

  return (
    <>
      {propertyFeatures.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <ul className="order_list list-inline-item">
            {item.list.map((val, i) => (
              <li key={i}>
                <span className="flaticon-tick"></span>
                {val}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;
