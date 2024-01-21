import {
  DarkModeFutureIcons,
  LightModeFutureIcons,
} from "../../Data/DarkModeIconData.tsx";
import "./Technologies.css";

interface TechnologiesProps {
  darkMode: boolean;
}

function Technologies({ darkMode }: TechnologiesProps) {
  const FutureIcons = darkMode ? DarkModeFutureIcons : LightModeFutureIcons;

  const currentTechnologies = Object.keys(FutureIcons).map((key) => {
    const icon = FutureIcons[key];
    return (
      <div className="ficons col border" key={key}>
        {icon.icon}
      </div>
    );
  });

  return (
    <div
      className="container text-center mb-5"
      style={{ color: darkMode ? "white" : "black" }}
    >
      <h1 className="mb-5">Technologies I am learning in 2024</h1>
      <div className="row row-cols-5 text-white icons">
        {currentTechnologies}
      </div>
    </div>
  );
}

export default Technologies;