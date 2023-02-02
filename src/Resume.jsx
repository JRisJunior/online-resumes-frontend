import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Timeline } from 'react-twitter-widgets'

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
      <div>
        <h3>First Name: {resume.first_name}</h3>
        <h3>Last Name: {resume.last_name}</h3>
        <h3>Email: {resume.email}</h3>
        <h3>Phone: {resume.phone}</h3>
        <h3>Biography: {resume.biography}</h3>
        <h3>LinkedIn: {resume.linkedin_url}</h3>
        <h3>Twitter: {resume.twitter_url}</h3>
        <h3>Website: {resume.website_url}</h3>
        <h3>Resume: {resume.resume_url}</h3>
        <h3>Github: {resume.github_url}</h3>
        <h3>Photo: {resume.photo_url}</h3>
      </div>
      <hr />
      {resume.educations?.map((education) => (
        <div key={education.id}>
          <h3>Start Date: {education.start}</h3>
          <h3>End Date: {education.end}</h3>
          <h3>Degree: {education.degree}</h3>
          <h3>University: {education.university}</h3>
          <h3>Details: {education.details}</h3>
        </div>
      ))}
      <hr />
      {resume.experiences?.map((experience) => (
        <div key={experience.id}>
          <h3>Start Date: {experience.start}</h3>
          <h3>End Date: {experience.end}</h3>
          <h3>Title: {experience.title}</h3>
          <h3>Company: {experience.company}</h3>
          <h3>Details: {experience.details}</h3>
        </div>
      ))}
      <hr />
      {resume.capstones?.map((capstone) => (
        <div key={capstone.id}>
          <h3>Name: {capstone.name}</h3>
          <h3>Description: {capstone.description}</h3>
          <h3>Url: {capstone.url}</h3>
        </div>
      ))}
      <hr />
      { resume.twitter_user &&
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: resume.twitter_user
          }}
          options={{
            height: '400'
          }}
        />
      }
    </div>
  );
}
