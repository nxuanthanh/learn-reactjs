import { useState } from "react"

const courses = [
    {
        id: 1,
        name: 'Javascript',
    },
    {
        id: 2,
        name: 'ReactJS',
    },
    {
        id: 3,
        name: 'NextJS',
    },
]

function RadioBox() {
    const [checked, setChecked] = useState()

    function handleSubmit() {
        console.log({ id: checked })
    }

    return (
        <div style={{ padding: 32 }}>
            {courses.map((course) =>
                <div key={course.id}>
                    <input checked={checked === course.id} type="radio" onChange={() => setChecked(course.id)} />
                    {course.name}
                </div>)}
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default RadioBox