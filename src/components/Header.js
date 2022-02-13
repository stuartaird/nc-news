import "../css/index.css";

const Header = ({ user }) => {
  return (
    <div className="banner-outer third-color">
      <section className="banner-user third-color">
        Logged in as: {user}
      </section>
      <section className="banner-inner third-color">NC News</section>
    </div>
  );
};

export default Header;
