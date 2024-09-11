import myLogo from "/kvd_logo.png";
import "./App.css";

export default function Header() {
  return (
    <section className="header">
      <img
        id="brand-logo"
        src={myLogo}
        alt="image of blue and orange letter K logo"
      />
      <div id="brand-text">
        <h1>Kevin VanDonkelaar</h1>
        <h3>"Create ~ Develop ~ Inspire"</h3>
      </div>
    </section>
  );
}
