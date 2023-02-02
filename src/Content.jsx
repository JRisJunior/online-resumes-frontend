import { Home } from "./Home";
import { Resume } from "./Resume";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [students, setStudents] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [capstones, setCapstones] = useState([]);

  const handleIndexStudent = () => {
    axios.get("http://localhost:3000/students.json").then((response) => {
      setStudents(response.data);
    });
  };

  const handleIndexEducation = () => {
    axios.get("http://localhost:3000/educations.json").then((response) => {
      setEducations(response.data);
    });
  };

  const handleIndexExperience = () => {
    axios.get("http://localhost:3000/experiences.json").then((response) => {
      setExperiences(response.data);
    });
  };

  const handleIndexCapstones = () => {
    axios.get("http://localhost:3000/capstones.json").then((response) => {
      setCapstones(response.data);
    });
  };

  useEffect(handleIndexStudent, []);
  useEffect(handleIndexEducation, []);
  useEffect(handleIndexExperience, []);
  useEffect(handleIndexCapstones, []);

  return (
    <div>
      <h1>
        <center>Welcome</center>
      </h1>

      <Routes>
        <Route path="/" element={<Home students={students} />} />
        <Route
          path="/resume"
          element={
            <Resume
              students={students}
              educations={educations}
              experiences={experiences}
              capstones={capstones}
            />
          }
        />
      </Routes>
    </div>
  );
}
