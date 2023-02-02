import { Home } from "./Home";
import { Resume } from "./Resume";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <div>
      <h1>
        <center>Welcome</center>
      </h1>

      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route
          path="/resume"
          element={
            <Resume
              students={students}
              educations={educations}
              experiences={experiences}
              capstones={capstones}
            />
          }
        /> */}
      </Routes>
    </div>
  );
}
