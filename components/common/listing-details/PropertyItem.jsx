import properties from "@/data/properties";

const PropertyItem = ({ id }) => {
  const property = properties?.find((item) => item.id == id) || properties[0];
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <div>Apartment</div>
      </li>
      <li className="list-inline-item">
        <div>Beds: {property.itemDetails[0].number}</div>
      </li>
      <li className="list-inline-item">
        <div>Baths: {property.itemDetails[1].number}</div>
      </li>
      <li className="list-inline-item">
        <div>Sq Ft: {property.itemDetails[2].number}</div>
      </li>
    </ul>
  );
};

export default PropertyItem;
