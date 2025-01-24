import projectOne from "../../assets/Screenshot-Resume-Builder.png";
import projectTwo from "../../assets/Screenshot-My-Live-Resume-2.png";
import projectThree from "../../assets/Screenshot-Personal-Website.png";
import "./portfolio.css";

export function Portfolio() {
  return (
    <main>
      <section className="portfolio">
        <div className="port-left">
          <h2 className="page_title part_three">Part Three: Portfolio</h2>
          <article className="lc_content">
            <h2 className="lc_headings">Projects</h2>
            <ul id="project_list">
              <li>My Live Resume</li>
              <li>Personal Site</li>
              <li>Resume Builer</li>
            </ul>
            <h2 className="lc_headings">Relevant Experience</h2>
            <ul id="exp_list">
              <li>20+ years customer service</li>
              <li>12+ years in retail management</li>
              <li>Leadership training</li>
              <li>Merchandising skills</li>
              <li>Customer relations</li>
              <li>Employee training and development</li>
            </ul>
          </article>
        </div>
        <div className="column" id="port-center">
          <article>
            <h2 className="project_headings">Resume Builder</h2>
            <div className="port_center_contents">
              <img
                className="images"
                src={projectOne}
                alt="screenshot of my resume builder project"
              />
              <div className="portfolio_descs">
                <a href="https://kvdeveloper-resume-builder.netlify.app/">
                  Website
                </a>
                <a href="https://github.com/kvdcre8r/my-resume-builder">
                  Github Repo
                </a>
                <p>
                  Current project in development, a resume builder application
                  that will allow users to create and customize their own
                  resumes
                </p>
                  <ul>
                    <li>
                      Receives user input and dynamically generates a resume
                      based on the information provided
                    </li>
                    <li>
                      Allows users to customize the layout, style, and content
                      of their resume
                    </li>
                    <li>
                      Will feature the ability to save, print, and export
                      resumes in various formats
                    </li>
                  </ul>
              </div>
            </div>
          </article>
          <article>
            <h2 className="project_headings"> My Live Resume</h2>
            <div className="port_center_contents">
              <img
                className="images"
                src={projectTwo}
                alt="screenshot of my live resume project"
              />
              <div className="portfolio_descs">
                <a href="https://kevin-vandonkelaar-live-resume.netlify.app/">
                  Website
                </a>
                <a href="https://github.com/kvdcre8r/my_react_resume">
                  Github Repo
                </a>
                <p>
                  Interactive resume webpage meticulously crafted to highlight
                  the journey and skills of an aspiring web developer
                </p>
                  <ul>
                    <li>
                      Constructed with HTML, CSS, JavaScript, React, and Node
                    </li>
                    <li>
                      Showcases creativity and expertise in layout design and
                      user interface functionality
                    </li>
                    <li>
                      Features dynamic content, responsive behavior, modular
                      components, reusable code, and more
                    </li>
                  </ul>
              </div>
            </div>
          </article>
          <article>
            <h2 className="project_headings">Personal Site</h2>
            <div className="port_center_contents">
              <img
                className="images"
                src={projectThree}
                alt="screenshot of my personal website project"
              />
              <div className="portfolio_descs">
                <a href="https://github.com/Kevin-VanDonkelaar-Personal-Website/kvdcre8r">
                  Github Repo
                </a>
                <p>
                  Personal brand website demonstrating the knowledge and skills
                  necessary for success in web development and design
                </p>
                  <ul>
                    <li>
                      Single page application featuring themed sections
                      presenting bio, portfolio, and contact information
                    </li>
                    <li>
                      {" "}
                      Unique superhero design produces easy-to-follow,
                      functional, and engaging user experience
                    </li>
                    <li>
                      {" "}
                      Implements various CSS techniques including flexbox,
                      floating backgrounds, and responsive behaviors
                    </li>
                  </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
