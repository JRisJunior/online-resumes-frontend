import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Resume() {
  const params = useParams()
  const [resume, setResume] = useState({})

  const handleShowResume = () => {
    axios.get(`http://localhost:3000/resume/${params.id}.json`).then((response) => {
      console.log(response.data)
      setResume(response.data);
    });
  }

  useEffect(handleShowResume, [])


  return (
    <div>
      <h2>
        <u>Resume</u>
      </h2>
      {/* {props.students.map((student) => (
        <div key={student.id}>
          <h3>First Name: {student.first_name}</h3>
          <h3>Last Name: {student.last_name}</h3>
          <h3>Email: {student.email}</h3>
          <h3>Phone: {student.phone}</h3>
          <h3>Biography: {student.biography}</h3>
          <h3>LinkedIn: {student.linkedin_url}</h3>
          <h3>Twitter: {student.twitter_url}</h3>
          <h3>Website: {student.website_url}</h3>
          <h3>Resume: {student.resume_url}</h3>
          <h3>Github: {student.github_url}</h3>
          <h3>Photo: {student.photo_url}</h3>
        </div>
      ))}
      <hr />
      {props.educations.map((education) => (
        <div key={education.id}>
          <h3>Start Date: {education.start}</h3>
          <h3>End Date: {education.end}</h3>
          <h3>Degree: {education.degree}</h3>
          <h3>University: {education.university}</h3>
          <h3>Details: {education.details}</h3>
        </div>
      ))}
      <hr />
      {props.experiences.map((experience) => (
        <div key={experience.id}>
          <h3>Start Date: {experience.start}</h3>
          <h3>End Date: {experience.end}</h3>
          <h3>Title: {experience.title}</h3>
          <h3>Company: {experience.company}</h3>
          <h3>Details: {experience.details}</h3>
        </div>
      ))}
      <hr />
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <h3>Name: {capstone.name}</h3>
          <h3>Description: {capstone.description}</h3>
          <h3>Url: {capstone.url}</h3>
        </div>
      ))} */}
    </div>
  );
}
