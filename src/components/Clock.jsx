import { useState, useEffect } from "react"

export default function Clock(){
    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("sekuntti")
            setCurrTime(new Date().toLocaleTimeString())
        }, 1000)

        return ()=> {
            clearInterval(interval)
        }
    },[])

    return <h1>{currTime}</h1>
}
