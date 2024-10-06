const WhyChoose = ({ style = "" }) => {
  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Diversification",
      descriptions: `Invest in a variety of properties in one simple step.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Liquidity",
      descriptions: `Buy and sell REIT tokens easily, without long lock-in periods.`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Low Barrier to Entry",
      descriptions: `Start with as little as $10 and scale your investment over time.`,
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
