import axios from 'axios';
import { useState, useEffect } from 'react';
import { StudentsIndex } from "./StudentsIndex";

export function Content() {

  const [students, setStudents] = useState([]);

  const handleIndexStudents = () => {
    console.log("handleIndexStudents");
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

useEffect(handleIndexStudents, []);

  return (
    <div>
      <StudentsIndex students={students} />
    </div>
  );
}