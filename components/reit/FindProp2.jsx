import Link from "next/link";
import findProperties from "../../data/findProperties";
import Image from "next/image";

const FindProp2 = () => {
  return (
    <>
      {findProperties.slice(0, 4).map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl" key={item.id}>
          <Link
            href="/listing-grid-v2"
            className="properti_city_home8 text-center d-block"
          >
            <div className="thumb">
              <Image
                className="cover w-100 h-100"
                src={item.img}
                alt="pc1.jpg"
                width={150}
                height={150}
              />
            </div>

            <div className="details">
              <h4>{item.name}</h4>
              <p>{item?.data} </p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProp2;
