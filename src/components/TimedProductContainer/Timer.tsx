import React from "react";
import { useState, useEffect } from "react";

interface Props {
    startDate: Date
    endDate: Date
}
const Timer = ({ startDate, endDate }: Props) => {

    const [totalTime, setTotalTime] = useState(0)

    const today = new Date()

    const timeBetween = today.getTime() - endDate.getTime()
    const secondsFrom = timeBetween / 1000
    const secondsBetween = Math.abs(secondsFrom)

    if (startDate.getTime() < today.getTime() && endDate.getTime() > today.getTime() && totalTime === 0) {
        setTotalTime(secondsBetween)
    }

    const day = Math.floor(totalTime / 86400)
    const hour = Math.floor((totalTime - 86400 * day) / 3600)
    const minutes = Math.floor((totalTime - 3600 * hour - 86400 * day) / 60)
    const seconds = Math.floor(totalTime % 60)

    useEffect(() => {
        setTimeout(() => {
            if (totalTime >= 1) {
                setTotalTime(totalTime - 1)
            }
        }, 1000)
    }, [totalTime])

    return (
        <div className="timer">
            {totalTime > 0 ? <div>
                {day > 0 ? <span>{day.toString().padStart(2, "0")}:</span> : null}
                <span>{hour.toString().padStart(2, "0")}:</span>
                <span>{minutes.toString().padStart(2, "0")}:</span>
                <span>{seconds.toString().padStart(2, "0")}</span>
            </div> : null}
        </div>
    )
}

export default Timer;