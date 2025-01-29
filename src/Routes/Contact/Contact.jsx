import "./contact.css";

export function Contact() {
  return (
    <main>
      <section id="contact">
        <div className="column" id="contact-left">
          <h2 className="page_title part_four">Epilogue: Learn More!</h2>
          <article>
            <p>
              If you think I might be a good fit for your team, or you would
              like to learn more about what this super-powered web developer can
              do for you, please reach out to me... I'd love to hear from you
              today!
            </p>
          </article>
        </div>
        <div className="column" id="contact-right">
          <article id="rc_content">
            <h2 id="rc_title">Social Media</h2>
            <h2 className="contact_meta_name">Google:</h2>
            <a className="contact_link" href="">
              kvdcre8r@gmail.com
            </a>
            <h2 className="contact_meta_name">LinkedIn:</h2>
            <a
              className="contact_link"
              href="https://www.linkedin.com/in/kevinvandonkelaar"
            >
              linkedin.com/in/
              <br />
              kevinvandonkelaar
            </a>
            <h2 className="contact_meta_name">GitHub:</h2>
            <a className="contact_link" href="https://github.com/kvdcre8r">
              github.com/kvdcre8r
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
