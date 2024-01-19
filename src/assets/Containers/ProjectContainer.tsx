import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import MoonMice from "../../../public/Lotties/MoonMice.json";
import AstronautCoder from "../../../public/Lotties/AstronautCoder.json";
import Alien from "../../../public/Lotties/Alien.json";

interface Project {
  darkMode: boolean;
}

const projectData = {
  projectOne: {
    description: "This is a description 1",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    image: "https://picsum.photos/200/300",
    name: "Project Name 1",
    id: 1,
  },
  projectTwo: {
    description: "This is a description 2",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    image: "https://picsum.photos/200/300",
    name: "Project Name 2",
    id: 2,
  },
  projectThree: {
    description: "This is a description 3",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    image: "https://picsum.photos/200/300",
    name: "Project Name 3",
    id: 3,
  },
};

function ProjectContainer({ darkMode }: Project) {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: true,
  });

  const generateAnimationOptions = (animationData, darkMode) => ({
    loop: true,
    autoplay: animationState.isStopped,
    animationData: darkMode ? animationData : animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const animationOptionsMice = generateAnimationOptions(MoonMice, darkMode);
  const animationOptionsAstronautCoder = generateAnimationOptions(
    AstronautCoder,
    darkMode,
  );
  const animationOptionsAlien = generateAnimationOptions(Alien, darkMode);

  return (
    <div>
      <ProjectCard
        darkMode={darkMode}
        projectData={projectData.projectOne}
        animationOptionsMice={darkMode ? animationOptionsMice : undefined}
      />
      <ProjectCard
        darkMode={darkMode}
        projectData={projectData.projectTwo}
        animationOptionsAstronautCoder={
          darkMode ? animationOptionsAstronautCoder : undefined
        }
      />
      <ProjectCard
        darkMode={darkMode}
        projectData={projectData.projectThree}
        animationOptionsAlien={darkMode ? animationOptionsAlien : undefined}
      />
    </div>
  );
}

export default ProjectContainer;
