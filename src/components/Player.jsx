import { Cover } from './Cover'
import style from './Player.module.css'
import cover from '../assets/img/cover.png'
import { Info } from './Info'
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'
import { Button } from './Button'
import { Timeline } from './Timeline'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export function Player() {
    var duration = "00:10"
    var durationInSeconds = 10

    const [now, setNow] = useState("00:00")
    const [nowInSeconds, setNowInSeconds] = useState(0)
    const [left, setLeft] = useState(duration)
    const [total] = useState(duration)
    const [totalInSeconds] = useState(durationInSeconds)
    const [percentage, setPercentage] = useState(0)

    function musicTimeout() {
        setNowInSeconds(prev => {
            if (prev >= totalInSeconds) {
                return prev
            }
            else {
                var day = dayjs().format('YYYY-MM-DD')
                var timeNow = dayjs(`${day} 00:00:00`).add(prev + 1, 'second')
                var timeLeft = dayjs(`${day} 00:${total}`).subtract(prev + 1, 'second')

                setNow(timeNow.format('mm:ss'))
                setLeft(timeLeft.format('mm:ss'))
                setPercentage(Math.ceil((prev + 1) / totalInSeconds * 100))
                return prev + 1
            }
        })
    }

    useEffect(() => {
        const timeout = setInterval(musicTimeout, 1000);
        return () => {
            clearInterval(timeout)
        }
    }, []);

    return (
        <div className={style.container}>
            <div className={style.coverinfo}>
                <Cover source={cover} />
                <Info title="Acorda Devinho" artist="Banda Rocketseat" />
            </div>
            <div className={style.buttons}>
                <Button Icon={FaBackward} color="#E1E1E6" size="1.2em" />
                <Button Icon={FaPlay} color="#E1E1E6" size="1.2em" />
                <Button Icon={FaForward} color="#E1E1E6" size="1.2em" />
            </div>
            <Timeline className={style.timeline} now={now} left={left} percentage={percentage} />
        </div>
    )
}