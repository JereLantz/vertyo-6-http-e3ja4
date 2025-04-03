import { useState } from "react"
import Clock from "./Clock"

export default function LiveClock(){
    const [showClock, setShowClock] = useState(false)

    function handleToggleClock(){
        setShowClock((p)=> !p)
    }
    return(
        <div>
        <button onClick={handleToggleClock}>Toggle clock</button>
        {showClock && <Clock />}
        </div>
    )
}
