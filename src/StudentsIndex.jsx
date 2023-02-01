export function StudentsIndex(props) {
  return (
    <div>
      <h1>All students</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <h2>{student.first_name}</h2>
        </div>
      ))};
    </div>
  );
}