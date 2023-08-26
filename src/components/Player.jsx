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
    var DURATION = "00:10"
    var DURATION_IN_SECONDS = 10

    const [now, setNow] = useState("00:00")
    const [nowInSeconds, setNowInSeconds] = useState(0)
    const [left, setLeft] = useState(DURATION)
    const [total] = useState(DURATION)
    const [totalInSeconds] = useState(DURATION_IN_SECONDS)
    const [percentage, setPercentage] = useState(0)
    const [playing, setPlaying] = useState(false)

    function musicTimeout() {
        setNowInSeconds(prev => {
            if (prev >= totalInSeconds || !playing) {
                return prev
            }
            else {
                var day = dayjs().format('YYYY-MM-DD')
                var timeNow = dayjs(`${day} 00:00:00`).add(prev + 1, 'second')
                var timeLeft = dayjs(`${day} 00:${total}`).subtract(prev + 1, 'second')

                setNow(timeNow.format('mm:ss'))
                setLeft(timeLeft.format('mm:ss'))
                setPercentage(Math.ceil((prev + 1) / totalInSeconds * 100))

                if (prev + 1 >= totalInSeconds) {
                    setPlaying(false)
                }

                return prev + 1
            }
        })
    }

    function handlePlay() {
        if (nowInSeconds >= totalInSeconds && !playing) {
            setNow("00:00")
            setNowInSeconds(0)
            setLeft(DURATION)
            setPercentage(0)
        }
        setPlaying(!playing)
    }

    useEffect(() => {
        const timeout = setInterval(musicTimeout, 1000);
        return () => {
            clearInterval(timeout)
        }
    }, [playing]);

    return (
        <div className={style.container}>
            <div className={style.coverinfo}>
                <Cover source={cover} />
                <Info title="Acorda Devinho" artist="Banda Rocketseat" />
            </div>
            <div className={style.buttons}>
                <Button Icon={FaBackward} color="#E1E1E6" size="1.2em" />
                <Button Icon={playing ? FaPause : FaPlay} color="#E1E1E6" size="1.2em" action={handlePlay} />
                <Button Icon={FaForward} color="#E1E1E6" size="1.2em" />
            </div>
            <Timeline className={style.timeline} now={now} left={left} percentage={percentage} />
        </div>
    )
}