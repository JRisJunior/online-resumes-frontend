export function Resume(props) {
  return (
    <div>
      <h2>
        <u>Resume</u>
      </h2>
      {props.students.map((student) => (
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
    </div>
  );
}
