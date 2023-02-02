import { Home } from "./Home";
import { Resume } from "./Resume";
import { Routes, Route } from "react-router-dom";
import { ResumePdf } from "./ResumePdf";

export function Content() {
  return (
    <div>
      <h1>
        <center>Welcome</center>
      </h1>
      <ResumePdf/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume/:id" element={<Resume />} />
      </Routes>
    </div>
  );
}
