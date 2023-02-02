import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Timeline } from 'react-twitter-widgets'

import { jsPDF } from "jspdf";
import './ResumePdf.css';

export function ResumePdf() {
  const pdfRef = useRef(null);
  const params = useParams()
  const [resume, setResume] = useState({})

  const handleShowResume = () => {
    axios.get(`http://localhost:3000/resume/${params.id}.json`).then((response) => {
      console.log(response.data)
      setResume(response.data);
    });
  }

  useEffect(handleShowResume, [])

  const handleDownload = () => {
    const content = pdfRef.current;

    const doc = new jsPDF('p','px','a3');
    doc.html(content, {
      callback: function (doc) {
        doc.save('sample.pdf');
      },
      width: 200,
      windowWidth: 200,
      margin: 20
    });
  };

 return (
    <div className="container">
      <header ref={pdfRef}> 
        <div className="header">
          <div className="full-name">
            <span className="first-name">{resume.first_name}</span> 
            <span className="last-name">{resume.last_name}</span>
          </div>
          <div className="contact-info">
            <span className="email">{resume.email}</span>
            <span className="email-val">{resume.phone}</span>
            <span className="separator"></span>
            <span className="phone">Phone: </span>
            <span className="phone-val">111-222-3333</span>
          </div>
    
          <div className="about">
            <span className="position">Biography</span>
            <span className="desc">{resume.biography}</span>
          </div>
        </div>
        <div className="details">
          <div className="section">
            <div className="section__title">Experience</div>
            <div className="section__list">
              {resume.experiences?.map((experience, index) => (
              <div className="section__list-item" key={index}>
                <div className="left">
                  <div className="name">{experience.company}</div>
                  <div className="duration">{experience.start} - {experience.end}</div>
                </div>
                <div className="right">
                  <div className="name">{experience.title}</div>
                  <div className="desc">{experience.details}</div>
                </div>
              </div>
              ))}
            </div>
          </div>
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              {resume.educations?.map((education, index) => (
              <div className="section__list-item" key={index}>
                <div className="left">
                  <div className="name">{education.university}</div>
                  <div className="duration">{education.start} - {education.end}</div>
                </div>
                <div className="right">
                  <div className="name">{education.degree}</div>
                  <div className="desc">{education.details}</div>
                </div>
              </div>
              ))}

            </div>
          </div>
          <div className="section">
            <div className="section__title">Projects</div> 
            <div className="section__list">
              {resume.capstones?.map((capstone, index) => (
              <div className="section__list-item" key={index}>
                <div className="name">{capstone.name}</div>
                <div className="text">{capstone.description}</div>
              </div>
              ))}
            </div>
          </div>
          <div className="section">
            <div className="section__title">Skills</div>
            <div className="skills">
              {resume.skills?.map((skill, index) => (
              <div className="skills__item" key={index}>
                <div className="left">
                  <div className="name">{skill.name}</div>
                </div>
                <div className="right">
                  <input  id="ck1" type="checkbox" checked/>

                  <label for="ck1"></label>
                  <input id="ck2" type="checkbox" checked/>

                  <label for="ck2"></label>
                  <input id="ck3" type="checkbox" />

                  <label for="ck3"></label>
                  <input id="ck4" type="checkbox" />
                  <label for="ck4"></label>
                  <input id="ck5" type="checkbox" />
                  <label for="ck5"></label>

                </div>
              </div>
              ))}
            </div>
          </div>
          <div className="section">
            <div className="section__title">
       Interests
            </div>
            <div className="section__list">
              <div className="section__list-item">
                  Football, programming.
              </div>
            </div>
          </div>
        </div>
      </header>
      <button onClick={handleDownload} className="btn btn-primary">Download PDF</button>

      <hr/>
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

