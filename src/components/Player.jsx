import { Cover } from './Cover'
import style from './Player.module.css'
import cover from '../assets/img/cover.png'
import { Info } from './Info'
import { Button } from './Button'
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'

export function Player() {
    return (
        <div className={style.container}>
            <Cover source={cover} />
            <Info title="Acorda Devinho" artist="Banda Rocketseat" />
            <div className={style.buttons}>
                <Button Icon={FaBackward} color="#E1E1E6" size="1.2em" />
                <Button Icon={FaPlay} color="#E1E1E6" size="1.2em" />
                <Button Icon={FaForward} color="#E1E1E6" size="1.2em" />
            </div>
        </div>
    )
}