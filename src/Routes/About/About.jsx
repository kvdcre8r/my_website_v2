import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import "./about.css";

export function About() {
  return (
      <div className="about">
        <AboutLeft />
        <AboutRight />
      </div>
  );
}