import { useEffect, useRef, useState } from "react";

function UseRef() {
    const [count, setCount] = useState(60)

    const timer = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        prevCount.current = count
    }, [count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
    })

    console.log(count, prevCount.current)

    function handleStart() {
        timer.current = setInterval(() => setCount(prev => prev - 1), 1000)
    }
    function handleStop() {
        clearInterval(timer.current)
    }

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRef