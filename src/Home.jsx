import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Resume } from "./Resume";

export function Home() {
  const [resumes, setResumes] = useState([]);

  const handleIndexResume = () => {
    axios.get("http://localhost:3000/resumes.json").then((response) => {
      console.log(response.data)
      setResumes(response.data);
    });
  }

  useEffect(handleIndexResume, [])

  return (
    <div>
      <h2>
        <u>Students</u>
      </h2>
      {resumes.map((resume) => (
        <div key={resume.id}>
          <h3>
            <Link to={`/resume/${resume.id}`}>
              {resume.first_name} {resume.last_name}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
}
