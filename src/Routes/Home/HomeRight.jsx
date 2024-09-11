import devLogos from "./web-dev-logos.png";

export default function HomeRight() {
  return (
    <main>
      <section className="home_right">
        <article id="profile_pic">
          <h2>Your Hero:</h2>
        </article>
        <article id="known_aliases">
          <h3>Aliases:</h3>
          <p>kvdcre8r, kvthinker, mrwordsmith</p>
        </article>
        <article id="toolbelt">
          <h3>Toolbelt:</h3>
          <img id="dev-logos" src={devLogos} alt="html css js logos" />
        </article>
      </section>
    </main>
  );
}
