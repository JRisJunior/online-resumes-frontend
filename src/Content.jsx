import { Home } from "./Home";
import { Resume } from "./Resume";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [students, setStudents] = useState([]);

  const handleIndexStudent = () => {
    axios.get("http://localhost:3000/students.json").then((response) => {
      setStudents(response.data);
    });
  };

  useEffect(handleIndexStudent, []);

  return (
    <div>
      <h1>
        <center>Welcome</center>
      </h1>

      <Routes>
        <Route path="/" element={<Home students={students} />} />
        <Route path="/resume" element={<Resume students={students} />} />
      </Routes>
    </div>
  );
}
