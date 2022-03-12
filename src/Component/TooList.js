import { useState } from "react"

function TodoList() {

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        return JSON.parse(localStorage.getItem('jobs')) || []
    })

    function handleSubmit() {
        setJobs(prev => {
            const newJobs = [...prev, job]

            // save to localStorage
            localStorage.setItem('jobs', JSON.stringify(newJobs))

            return newJobs
        })
        setJob('')
    }

    return (
        <div style={{ padding: 32 }}>
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => <li key={index}>{job}</li>)}
            </ul>
        </div>
    )
}

export default TodoList