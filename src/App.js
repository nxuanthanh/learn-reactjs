import { useState } from "react";

const courses = [
  {
    id: 1,
    name: 'HTML & CSS',
  },
  {
    id: 2,
    name: 'Javacript',
  },
  {
    id: 3,
    name: 'ReactJS',
  },
]

function App() {
  return (
    <div className="App">
      <div style={{ padding: 32 }}>
        {courses.map(course => (
          <div key={course.id}><input type="checkbox" onChange={() => { }} />{course.name}</div>))}
      </div>
      <button>Register</button>
    </div>
  )
}

export default App;