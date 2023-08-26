import style from './Timeline.module.css'

export function Timeline({ now, left, percentage }) {
    return (
        <div className={style.container}>
            <div className={style.line}>
                <div style={{ width: `${percentage}%` }}></div>
            </div>
            <div className={style.times}>
                <span>{now}</span>
                <span>{left}</span>
            </div>
        </div >
    )
}