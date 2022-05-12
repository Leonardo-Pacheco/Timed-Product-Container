import React from 'react'
import { useState, useEffect } from 'react'
import { TimerProps } from './TimedProductContainer'

const Timer = ({
  startDate,
  endDate,
  timer,
  children,
  timerStyle
}: TimerProps) => {
  const [totalTime, setTotalTime] = useState(0)

  const today = new Date()

  const timeBetween = today.getTime() - endDate.getTime()
  const secondsFrom = timeBetween / 1000
  const secondsBetween = Math.abs(secondsFrom)

  if (
    startDate.getTime() < today.getTime() &&
    endDate.getTime() > today.getTime() &&
    totalTime === 0
  ) {
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

  const checkDateRange = Boolean(startDate < today && endDate > today)

  return (
    <div data-testid="timer">
      {totalTime > 0 && timer && checkDateRange ? (
        <div
          style={
            timerStyle ?? {
              fontSize: '40px',
              fontWeight: '700',
              right: '200px',
              position: 'absolute'
            }
          }
        >
          {day > 0 ? <span>{day.toString().padStart(2, '0')}:</span> : null}
          <span>{hour.toString().padStart(2, '0')}:</span>
          <span>{minutes.toString().padStart(2, '0')}:</span>
          <span>{seconds.toString().padStart(2, '0')}</span>
        </div>
      ) : null}
      {checkDateRange ? children : null}
    </div>
  )
}

export default Timer
