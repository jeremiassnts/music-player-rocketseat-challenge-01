import style from './Timeline.module.css'

export function Timeline({ now, left }) {
    return (
        <div className={style.container}>
            <div className={style.line}>
                <div></div>
            </div>
            <div className={style.times}>
                <span>{now}</span>
                <span>{left}</span>
            </div>
        </div>
    )
}