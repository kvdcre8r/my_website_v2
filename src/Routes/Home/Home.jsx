import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import "./home.css";

export function Home() {
  return (
    <div className="home">
      <HomeLeft />
      <HomeRight />
    </div>
  );
}
