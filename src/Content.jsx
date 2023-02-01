import { Home } from "./Home";
import axios from "axios";
import { useState, useEffect } from "react";

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
      <h1>Student Resumes</h1>
      <Home students={students} />
    </div>
  );
}
