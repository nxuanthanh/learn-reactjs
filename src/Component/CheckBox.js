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

function CheckBox() {
    const [checked, setChecked] = useState([])

    function handleSubmit() {
        console.log({ id: checked })
    }

    function handleChecked(id) {

        setChecked(() => {
            if (checked.includes(id)) {
                return checked.filter(curr => curr !== id)
            } else {
                return [...checked, id]
            }
        })

        return checked
    }

    return (
        <div style={{ padding: 32 }}>
            {courses.map((course) =>
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => { handleChecked(course.id) }} />
                    {course.name}
                </div>)}
            <button style={{ marginTop: 20 }} onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default CheckBox