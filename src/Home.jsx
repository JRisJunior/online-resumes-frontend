export function Home(props) {
  return (
    <div>
      <h2>
        <u>Students</u>
      </h2>
      {props.students.map((student) => (
        <div key={student.id}>
          <h3>
            {student.first_name} {student.last_name}
          </h3>
        </div>
      ))}
    </div>
  );
}
