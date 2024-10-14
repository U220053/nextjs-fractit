const Social = () => {
  const socialContent = [
    { id: 2, liveLink: "https://x.com/FractItLabs", icon: "fa-twitter" },
    { id: 3, liveLink: "https://blog.fractit.com/", icon: "fa-medium" },
    {
      id: 4,
      liveLink: "https://discord.com/invite/dJDKZTqMHq",
      icon: "./assets/images/discord.png",
    },
    // {
    //   id: 5,
    //   liveLink: "https://discord.com/invite/dJDKZTqMHq",
    //   icon: "fa-discord",
    // },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
