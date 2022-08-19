import logoImg from "./../../assets/images/logo.png";
import cls from "./navigation.module.scss";

const navigationConfig = [
  {
    title: "About",
  },
  {
    title: "Features",
  },
  {
    title: "Reviews",
  },
  {
    title: "Blog",
  },
  {
    title: "Support",
  },
];

const Navigation = () => {
  return (
    <div className={cls.wrapper}>
      <nav className={cls.nav}>
        <a href="/">
          <img src={logoImg} alt="Fit App" />
        </a>
        <div className={cls.links}>
          {navigationConfig.map((item) => (
            <a href="/" className={cls.link}>
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
