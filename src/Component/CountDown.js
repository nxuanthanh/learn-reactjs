import { useEffect, useState } from "react"

function CountDown() {
    const [countDown, setCountDown] = useState(180)

    useEffect(() => {

        const timerId = setInterval(() => setCountDown(prev => prev === 0 ? 180 : prev - 1), 1000)

        return () => { clearInterval(timerId) }
    }, [])

    return (
        <h3>{countDown}</h3>
    )
}

export default CountDown