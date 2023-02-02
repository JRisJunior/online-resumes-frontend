import { Link } from "react-router-dom";
import { Resume } from "./Resume";

export function Home(props) {
  return (
    <div>
      <h2>
        <u>Students</u>
      </h2>
      {props.students.map((student) => (
        <div key={student.id}>
          <h3>
            <Link to="/resume">
              {student.first_name} {student.last_name}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
}
