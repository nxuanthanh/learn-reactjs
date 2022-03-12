import { useEffect, useState } from "react"

const courses = [
    {
        id: 1,
        lesson: 'Javascript',
    },
    {
        id: 2,
        lesson: 'ReactJS',
    },
    {
        id: 3,
        lesson: 'NextJS',
    },
]

function UnSubsribe() {

    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        function handleComment({ detail }) {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }, [lessonId])

    return (
        <ul>
            {courses.map(course => (
                <li key={course.id}
                    style={{ cursor: 'pointer', color: course.id === lessonId ? 'red' : '#333' }}
                    onClick={() => setLessonId(course.id)}>
                    {course.lesson}
                </li>))}
        </ul>
    )
}

export default UnSubsribe