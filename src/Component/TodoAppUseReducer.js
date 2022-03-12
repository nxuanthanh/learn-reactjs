import { useReducer, useRef } from "react"

// 1. InitState
const initState = {
    job: '',
    jobs: [],
}

// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload,
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload,
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload,
    }
}
// 3. Reducer
const reducer = (state, action) => {

    switch (action.type) {
        case SET_JOB:
            return { ...state, job: action.payload }

        case ADD_JOB:
            return { ...state, jobs: [...state.jobs, action.payload] }

        case DELETE_JOB:
            const newJobs = [...state.jobs]

            newJobs.splice(action.payload, 1)

            return { ...state, jobs: newJobs }

        default:
            throw new Error(`Invalid action`);
    }
}

function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('PrevState: ', prevState)
        console.log('Action: ', action)

        const newState = reducer(prevState, action)

        console.log('Next State: ', newState)

        console.groupEnd()

        return newState
    }
}

// dispatch
function TodoAppUseReducer() {

    const [state, dispatch] = useReducer(logger(reducer), initState)

    const { job, jobs } = state
    const inputRef = useRef()

    function handleSubmit() {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <div style={{ padding: '0 20px' }}>
            <h2>Todo</h2>
            <input value={job}
                ref={inputRef}
                placeholder="Enter todo..."
                onChange={(e) => dispatch(setJob(e.target.value))} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) =>
                    <li key={index}>
                        {job}
                        <span style={{ color: "red", cursor: "pointer" }}
                            onClick={() => dispatch(deleteJob(index))}> &times;</span>
                    </li>)}
            </ul>
        </div>
    )
}

export default TodoAppUseReducer
