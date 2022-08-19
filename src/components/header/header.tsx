import cls from "./header.module.scss";
import appIcon from "./../../assets/images/app_icon2.png";
import appStoreImg from "./../../assets/images/appstore.png";
import googlePlayImg from "./../../assets/images/google_play.png";
import iphoneTopImg from "./../../assets/images/iphone_top2.png";
import Navigation from "../navigation/navigation";

const Header = () => {
  return (
    <section className={cls.wrapper}>
      <div className={cls.header}>
        <Navigation />
        <div className={cls.leftColumn}>
          <img className={cls.appIcon} src={appIcon} alt="Fit App" />
          <h1 className={cls.heading}>
            Helps you eat <b>better.</b>
          </h1>
          <p className={cls.desc}>
            FitApp is a free calorie counting and diet app PSD template which
            includes high quality 9 screens. This template can be very helpful
            if you're planning to build food tracking application.{" "}
          </p>
          <div className={cls.stores}>
            <img src={appStoreImg} alt="App Store" />
            <img src={googlePlayImg} alt="Google Play" />
          </div>
        </div>
        <img className={cls.iphoneImg} src={iphoneTopImg} alt="" />
      </div>
    </section>
  );
};

export default Header;
