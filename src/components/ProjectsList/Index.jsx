import React from "react";
import PicProfile from "../assets/images/Profile.png";
import Data from "../Hooks/ProjectsData/Data";

import * as s from "./styles";

function Projects() {
  return (
    <s.ProjectsContainer id="Projects">
      <s.Title>Projects</s.Title>
      <s.ProjectsList>
        {Data.map((project, index) => {
          return (
            <>
              <s.ProjectItem key={index}>
                <div>
                  <p>{project.name}</p>

                  <img
                    src={require(`../${project.image}`)}
                    alt="Project's logo"
                  />
                </div>
                <s.TechsList>
                  <h4>Main Techs:</h4>
                  {project.techs.map((tech) => {
                    return (
                      <>
                        <li>
                          <p>{tech}</p>
                        </li>
                      </>
                    );
                  })}
                </s.TechsList>
                <s.Description>
                  <p>{project.description}</p>
                </s.Description>
                <s.ButtonsContainer>
                  <section>
                    <button>
                      <a target="_blank" href={project.html_url}>
                        REPOSITORY
                      </a>
                    </button>
                    <button>
                      <a target="_blank" href={project.homepage}>
                        WEBSITE
                      </a>
                    </button>
                  </section>
                </s.ButtonsContainer>
                <s.Border />
              </s.ProjectItem>
            </>
          );
        })}
      </s.ProjectsList>
    </s.ProjectsContainer>
  );
}

export default Projects;
