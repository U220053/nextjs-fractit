const AllStatistics = () => {
  const allStatistics = [
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "01",
      name: "Owned Properties",
    },
    {
      id: 2,
      blockStyle: "style2",
      icon: "flaticon-view",
      timer: "12",
      name: "Total Tokens",
    },
    {
      id: 3,
      blockStyle: "style3",
      icon: "flaticon-chat",
      timer: "$12",
      name: "Total Value Of Tokens",
    },
    {
      id: 4,
      blockStyle: "style4",
      icon: "flaticon-heart",
      timer: "91%",
      name: "ROI(5 years)",
    },
  ];

  return (
    <>
      {allStatistics.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3" key={item.id}>
          <div className={`ff_one ${item.blockStyle}`}>
            <div className="detais">
              <div className="timer">{item.timer}</div>
              <p>{item.name}</p>
            </div>
            {/* <div className="icon">
              <span className={item.icon}></span>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default AllStatistics;
